const form = function () {
    $(`[data-form]`).each(function () {
        let title = $(this).data(`form`);
        let placeholder = $(this).data(`form-placeholder`) || `Комментарий`;
        let $formWrap = $('.form__wrapper_simple');
        let $form = $formWrap.find(".form");
        let $input = $form.find(`.dinamic-input`);
        $(this).click(() => {
            $formWrap.addClass('show')
            $form.find(`h3`).text(title)
            $input.attr('placeholder', placeholder)
            console.log(title, placeholder)
        })
    })

    function closeForm() {
        $('.form__wrapper').each(function () {
            $(this).removeClass("show")
        })
    }

    $(".form__close").each(function () {
        $(this).click(() => {
            closeForm()
        })
    });

    $('body').on('click', '.form__wrapper', (e) => {
        let form = ".form";
        if ($(e.target).closest(form).length === 0) {
            closeForm();
        };
    });
}
module.exports = {
    form: form
};