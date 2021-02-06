import Inputmask from "inputmask";
import { get } from "jquery";


export default function () {
    // Устанавливаем маску на телефон
    var inputTel = document.querySelectorAll(`input[type="tel"]`);
    var im = new Inputmask("9 999 999-99-99");
    im.mask(inputTel)

    // подключаем бибилиотеку для кастомизирования селекта
    // $('.js-example-basic-single').select2({
    //     width: 'style'
    // });

    // обработчик нажатия на триггеры формы
    $(`body`).on('click', `[data-form]`, function () {
        const $this = $(this).closest(`[data-form]`);
        let title = $($this).data(`form`);
        let formType = $($this).data(`form-type`) || `simple`;
        let placeholder = $($this).data(`form-placeholder`) || `Комментарий`;
        let $formWrap = $(`.form__wrapper_${formType}`);
        let $form = $formWrap.find(".form");
        let $input = $form.find(`.dinamic-input`);

        $formWrap.addClass('show')
        $form.find(`h3`).text(title)
        $input.attr('placeholder', placeholder)
    })

    // закрытие формы
    function closeForm() {
        $('.form__wrapper').each(function () {
            $(this).removeClass("show")
        })
    }

    // закрытие формы при нажатии на крестик
    $(".form__close").each(function () {
        $(this).click(() => {
            closeForm()
        })
    });

    // закрытие формы при нажатии вне формы
    $('body').on('click', '.form__wrapper', (e) => {
        let form = ".form";
        if ($(e.target).closest(form).length === 0) {
            closeForm();
        };
    });

    // форма продукции
    (() => {
        let $form = $(".form__wrapper_prod");
        let $productsGrid = $(`.products-block__grid`);
        let $moreCats = $(`.products-block__full-price`)

        // вставка формы продукции
        function pastContent(target) {
            let product = $(target).closest(".products-block__grid-item");
            let title = product.find("h3").text()
            let icon = product.find(".products-block__img-wrap").clone()

            $form.find(".form__cat-title").text(title)
            $form.find(".form__cat-icon").html(icon)
            $form.addClass("show")
        }

        if ($productsGrid) {
            $(`.products-block`).on(`click`, `.products-block__buy`, e => {
                let $target = e.target;
                pastContent($target)
                $form.addClass(`show`)
            })
        }
    })();

    // форма продукции из таблицы
    (() => {
        let $form = $(".form__wrapper_price");
        let $table = $(`.full-price__table`);

        // вставка формы продукции
        function pastContent(target) {
            let product = $(target).closest("tr");
            let title = product.find("td:first-child").text()

            $form.find(".form__cat-title").text(title)
            $form.addClass("show")
        }

        if ($table) {
            $(`.full-price__table`).on(`click`, `.full-price__buy`, e => {
                let $target = e.target;
                pastContent($target)
                $form.addClass(`show`)
            })
        }
    })();

    // Добавить UTM метки в тело запроса
    function getUTM() {
        //-МЕТА ТЕГИ
        var href = window.location.href;
        var search = window.location.search;
        var utm_mas = []; /* Пустой массив для хранения UTM меток, разбитых по "&" */
        var ref = document.referrer;
        let data = ``;

        if (href.indexOf("?") != -1) {
            href = href.slice(0, href.indexOf("?")); /* Адрес страницы без UTML хвоста */
            search = search.slice(1); /* UTM хвост без вопроса */
            utm_mas = search.split("&"); /* Массив UTM меток (ключ=значение) */
            localStorage.utm_mas = JSON.stringify(utm_mas);
        }

        if (localStorage.getItem('utm_mas') !== null) {
            var utm_key_value = {};
            var utm_mas_key = localStorage.utm_mas ? JSON.parse(localStorage.utm_mas) : [];

            /* Заполняем объект, создавая свойста и значения */
            for (let i = 0; i < utm_mas_key.length; i++) {
                utm_key_value[utm_mas_key[i].split("=")[0]] = utm_mas_key[i].split("=")[1];
            }
            /* Декодируем ключевые слова в UTM метке */
            if (utm_key_value.utm_term != "undefined") { utm_key_value.utm_term = decodeURIComponent(utm_key_value.utm_term); }
            if (utm_key_value.utm_term == "undefined") { utm_key_value.utm_term = ""; }
        }
        else {
            utm_key_value = "";
        }

        // Зададим переменные ддя ajax
        data += `&href=${href}`;
        data += `&term=${utm_key_value.utm_term || 'UTM метка отсутствует'}`;
        data += `&source=${utm_key_value.utm_source || 'UTM метка отсутствует'}`;
        data += `&medium=${utm_key_value.utm_medium || 'UTM метка отсутствует'}`;
        data += `&content=${utm_key_value.content || 'UTM метка отсутствует'}`;
        data += `&campaign=${utm_key_value.utm_campaign || 'UTM метка отсутствует'}`;

        return data;
    }

    getUTM();

    // обработчик отправки формы в телеграмм канал
    $(".form").submit(function (e) {
        e.preventDefault;

        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        var formFields = $(formNm).find(".form__actions");
        var formTitle = $(formNm).find(".form__title").text() || $(formNm).find(".form__cat-title").text();
        var formData = formNm.serialize()
        formData = `title=${formTitle}&` + formData + getUTM()

        console.log(formData);

        if (formID === `form-cat`) {
            let cat = $(formNm).find(".form__cat-title").text();
            let subcat = $(formNm).find(".form__subcat").text();
            formData = `cat=${cat}&` + `subcat=${subcat}&` + formData

            // удаление UTM меток
            // localStorage.removeItem('utm_mas');
        } else if (formID === `form-prod`) {
            let product = $(formNm).find(".form__cat-title").text();
            console.log(product);
            formData = `product=${product}&` + formData
        }

        $.ajax({
            type: "POST",
            url: 'forms/send-message-to-telegram.php',
            data: formData,
            success: function (data) {
                // Вывод сообщения об успешной отправке
                formFields.slideUp(300);
                formFields.after(data);
                setTimeout(function () {
                    formFields.slideDown(300);
                    closeForm()
                    formNm.find(`input`).not(':input[type=submit], :input[type=hidden]').val('');
                    formNm.find(`.form__success-msg`).remove();
                }, 3000);
            },
            error: function (jqXHR, text, error) {
                // Вывод сообщения об ошибке отправки
                formFields.html(error);
                setTimeout(function () {
                    formFields.html('');
                    $('input').not(':input[type=submit], :input[type=hidden]').val('');
                }, 3000);
            }
        });
        return false;
    });
    // Подписка на рассылку
    $(".footer__mailing").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        var formFields = $(formNm).find(".footer__subscribe-field");
        var formSubmit = $(formNm).find(".footer__subscribe-btn");
        var formData = formNm.serialize()
        formFields.hide(300);
        formSubmit.hide(0);

        $.ajax({
            type: "POST",
            url: 'forms/send-message-to-telegram-mail.php',
            data: formData,
            success: function (data) {
                // Вывод сообщения об успешной отправке
                formFields.after(data);
                setTimeout(function () {
                    formFields.show(300);
                    formSubmit.show(0);
                    formNm.find(`input`).not(':input[type=submit], :input[type=hidden]').val('');
                    formNm.find(`.footer__subscribe-msg`).remove();
                }, 3000);
            },
            error: function (jqXHR, text, error) {
                // Вывод сообщения об ошибке отправки
                formFields.after(text);
                setTimeout(function () {
                    formFields.show(300);
                    formSubmit.show(0);
                    formNm.find(`input`).not(':input[type=submit], :input[type=hidden]').val('');
                    formNm.find(`.footer__subscribe-msg`).remove();
                }, 3000);
            }
        });
        return false;
    });
}