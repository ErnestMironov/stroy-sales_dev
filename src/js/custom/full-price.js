import * as cookie from '../libs/cookie';

export default function () {
    function scrollToAnchor(aid) {
        var aTag = $(aid);
        aTag.addClass('focused')
        if (cookie.getCookie(`ppslide`)) {
            $('html,body').animate({ scrollTop: aTag.offset().top - 150 }, 'slow');
            cookie.deleteCookie(`ppslide`)
        }
    }

    $('body').on('click', '[data-ppslide]', function () {
        cookie.setCookie(`ppslide`, $(this).attr('data-ppslide'))
    })

    scrollToAnchor(cookie.getCookie(`ppslide`));
}