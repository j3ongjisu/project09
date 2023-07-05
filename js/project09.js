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
    // speed: 1600,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    on: {
      slideChangeTransitionStart: function () {
        $('.main_visual .dots li')
          .eq(this.realIndex)
          .addClass('on')
          .siblings()
          .removeClass('on')
      }
    }
  });



  $('.main_visual .arrows .left').on('click', function () {
    MainSlide.slidePrev();
  });
  $('.main_visual .arrows .right').on('click', function () {
    MainSlide.slideNext();
  });


  $('.main_visual .dots li').on('click', function () {
    const idx = $(this).index();
    $(this).addClass('on').siblings().removeClass('on')
    MainSlide.slideTo(idx);
  });

  $('.tab_link li').on('click', function (event) {
    event.preventDefault();
    let idx = $(this).index();

    $(this).addClass('on')
      .siblings().removeClass('on');
    $('.tab_content .con').eq(idx).addClass('on')
      .siblings().removeClass('on');
  });



  // .main_event에 화살표 버튼 눌러서 슬라이드 돌아가게 하기
  $('.main_event .arrows .left').on('click', function () {
    $('.event_slide').slick('slickPrev');
  });
  $('.main_event .arrows .right').on('click', function () {
    $('.event_slide').slick('slickNext');
  });


  $('.event_slide').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  // .main_issue에 화살표 버튼 눌러서 슬라이드 돌아가게 하기
  $('.main_issue .arrows .left').on('click', function () {
    $('.issue_slide').slick('slickPrev');
  });
  $('.main_issue .arrows .right').on('click', function () {
    $('.issue_slide').slick('slickNext');
  });


  $('.issue_slide').slick({
    slidesToShow: 5,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  //to_top
  //to_top 스크롤 위로 올리기
  $('.to_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600)
  });

  // to_top 스크롤 숨겼다가 나타내기
  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();
    // sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
    sct > 400 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
  });


});