$(document).ready(function () {
  var $slider = $('.slide-top-category');
  var $progressBar = $('.top-category-progress');
  var $progressBarLabel = $('.slider__label');

  // $slider

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
   
    var calc = ((nextSlide) / (slick.slideCount - 1 )) * 100;  
    if(calc === 0){
      calc = 5;
    }
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);

    $progressBarLabel.text(calc + '% completed');
  });

  $slider.slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});