
import Swiper, {
    Navigation, EffectFlip
} from 'swiper';
Swiper.use([Navigation, EffectFlip]);



export default function () {

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

    // if (screen.width > 600) {
    //     marketsSlider.destroy(true, true)
    //     $(".swiper-container").find(".swiper-wrapper").removeClass("swiper-wrapper");
    // }

    if (window.innerWidth < 600) {
        var popularSlider = new Swiper(`.products-slider .swiper-container`, {
            slidesPerView: 1,
            loop: true,
            effect: 'flip',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }

        })
    } else {
        var popularSlider = new Swiper(`.products-slider .swiper-container`, {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                700: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1000: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }

        })
    }

    var logoSlider = new Swiper(`.logo-slider .swiper-container`, {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            700: {
                slidesPerView: 2,
                spaceBetween: 50,
            }
        }
    })
}