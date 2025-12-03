import $ from 'jquery';
import 'slick-carousel';

$(function() {
  const $carousel = $('.carousel');
  if ($carousel.length) {
    $carousel.slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: $('.carousel-left'),
      nextArrow: $('.carousel-right'),
      appendArrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2, slidesToScroll: 1 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1, slidesToScroll: 1 }
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 1, slidesToScroll: 1 }
        }
      ]
    });
  }
});
