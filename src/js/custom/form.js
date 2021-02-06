import Inputmask from "inputmask";


const form = function () {
    // Устанавливаем маску на телефон
    var inputTel = document.querySelectorAll(`input[type="tel"]`);
    var im = new Inputmask("9 999 999-99-99");
    im.mask(inputTel)

    // подключаем бибилиотеку для кастомизирования селекта
    $('.js-example-basic-single').select2({
        width: 'style'
    });

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
        $form.find('input[type="text"]')[0].focus(); 
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

    // обработчик отправки формы в телеграмм канал
    $(".form").submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        var formFields = $(formNm).find(".form__actions");
        var formTitle = $(formNm).find(".form__title").text();
        var cat = $(formNm).find(".form__cat-title").text();
        var subcat = $(formNm).find(".form__subcat").text();
        var formData = formNm.serialize()
        formData = `title=${formTitle}&` + formData
        formData = `cat=${cat}&` + `subcat=${subcat}&` + formData

        console.log(formData)

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

module.exports = {
    form: form
};