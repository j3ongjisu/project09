$(function () {
  $(window).on('scroll', function () {
    const sct = $(window).scrollTop();
    if (sct > 0) {
      $('.Header').addClass('on')
    }
    else {
      $('.Header').removeClass('on')
    }
  });

  const MainSlide = new Swiper('.main_slide', {
    loop: true,
    parallax: true,
    speed: 1600,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    on: {
      slideChangeTransitionStart: function () {
        $('.MainVisual .dots li')
          .eq(this.realIndex)
          .addClass('on')
          .siblings()
          .removeClass('on')
      }
    }
  });



  $('.MainVisual .arrows .left').on('click', function () {
    MainSlide.slidePrev();
  });
  $('.MainVisual .arrows .right').on('click', function () {
    MainSlide.slideNext();
  });


  $('.MainVisual .dots li').on('click', function () {
    const idx = $(this).index();
    $(this).addClass('on').siblings().removeClass('on')
    MainSlide.slideTo(idx);
  });


  // $('.tab_link li').on('click', function (event) {
  //   event.preventDefault();
  //   let idx = $(this).index(); //0,1,2

  //   $(this).addClass('on')
  //     .siblings().removeClass('on');


});