import pasteSVG from '../src/js/libs/pasteSvg';
var categories = require('../src/js/custom/categories');
var menu = require('../src/js/custom/menu');
var form = require('../src/js/custom/form');
import Swiper, {
    Navigation
} from 'swiper';
Swiper.use([Navigation]);
import 'swiper/swiper-bundle.css';


$(document).ready(function () {
    categories.categories();
    menu.menu();
    form.form();
    pasteSVG();


    var marketsSlider = new Swiper('.markets-block__slider', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            400: {
                slidesPerView: 2,
                spaceBetween: 45,
            },
            700: {
                slidesPerView: 3,
                spaceBetween: 45,
                slidesOffsetBefore: 60,
                slidesOffsetAfter: 60,
            }
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

    if (screen.width > 600) {
        marketsSlider.destroy(true, true)
        $(".swiper-container").find(".swiper-wrapper").removeClass("swiper-wrapper");
    }
});