$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1100,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/arrow-right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }

        ]
    });
});