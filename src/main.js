import pasteSVG from '../src/js/libs/pasteSvg';
var categories = require('../src/js/custom/categories');
var menu = require('../src/js/custom/menu');
var form = require('../src/js/custom/form');
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


$(document).ready(function () {
    categories.categories();
    menu.menu();
    form.form();
    pasteSVG();
    $('.js-example-basic-single').select2({
        width: 'style'
    });

    var marketsSlider = new Swiper('.markets-block__slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        // on: {
        //     init: () => {
        //         $('.swiper-button-prev').hide(100)
        //     },
        //     transitionEnd: function () {
        //         this.isEnd ? $('.swiper-button-next').hide(100) : $('.swiper-button-next').show(100);
        //         this.isBeginning ? $('.swiper-button-prev').hide(100) : $('.swiper-button-prev').show(100);
        //     }
        // },

    });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
        marketsSlider.destroy(true, true)
        $(".swiper-container").find(".swiper-wrapper").removeClass("swiper-wrapper");
    }
});