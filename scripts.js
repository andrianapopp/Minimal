const settingSlider = {
    dots: true,
    arrows: true,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    mobileFirst: true,
    responsive: [
        {
            breakpoints: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoints: 760,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },

    ]
}


$(document).ready(function (){
    $('.slider').slick(settingSlider);
    }
)