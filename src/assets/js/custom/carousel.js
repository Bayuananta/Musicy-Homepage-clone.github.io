const { arrow } = require("@popperjs/core");

$(document).ready(function(){

  $('.hero__news').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
  
  $('.tour-content').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('#btn-prev-tour'),
    nextArrow: $('#btn-next-tour'),

    responsive: [
      {
        breakpoint: 481,
        settings: {
          dots: true,
          arrows: false,
        }
      },
    ]
  });
});

$('.videos__lists').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('#prev-btn-video'),
  nextArrow: $('#next-btn-video'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 376,
      settings: {
        arrows: true,
        slidesToShow: 1,
      }
    },
  ]
});

$('.album__cover').slick({
  infinite: true,
  centerMode: true,
  centerPadding: '250px',
  slidesToShow: 3,
  prevArrow: $('#prev-btn'),
  nextArrow: $('#next-btn'),
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '250px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1201,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 993,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 577,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 376,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});

