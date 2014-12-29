$(document).ready(function(){
  $('#technologies').slick({
      centerMode: true
    , centerPadding: 0
    , slidesToShow: 3

    , slidesToScroll: 1
    , autoplay: true
    , autoplaySpeed: 4000 // 4s

    // TODO: add responsive
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });
});