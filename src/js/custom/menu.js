const menu = function() {
    $(".menu, .footer__menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $("#" + id).offset().top;
        history.pushState(null, null, `/#${id}`);
        $('body,html').animate({scrollTop: top}, 500);
    });

    $(".menu__btn").click(function(){
        $(".menu").slideToggle(250)
        $(this).toggleClass("active")
    })
}

module.exports = {
    menu: menu
};