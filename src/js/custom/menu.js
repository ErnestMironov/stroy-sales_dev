const menu = function() {
    $(".menu").on("click",".menu__item a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $("#" + id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
}

module.exports = {
    menu: menu
};