(function($) {
  'use strict';
  $(function(e) {

    /*-------------------------------------------------------------------------------
    	  Sticky-Header
    	-------------------------------------------------------------------------------*/
    $(window).scroll(function() {
      var sticky = $('#header'),
        scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('sticky');
      else sticky.removeClass('sticky');
    });

    /*-------------------------------------------------------------------------------
    	  Mobile Navigation
    	-------------------------------------------------------------------------------*/

    $('li.has-child > a').after('<div class="child-trigger"><i></i></div>');

    $('#nav-toggle-label, .mobile-trigger').on('click', function() {
      $('body').toggleClass('mobile-open');
      $('.child-trigger').removeClass('child-open');
      $('.mobile-menu .sub-menu').slideUp(250);
      return false;
    });

    $('.mobile-trigger2').on('click', function() {
      $('body').toggleClass('mobile-open-2');
      $('.child-trigger').removeClass('child-open');
      $('.mobile-menu .sub-menu').slideUp(250);
      return false;
    });

    $('.child-trigger').on('click', function() {
      var $parent = $(this).parent().siblings('.has-child');
      $parent.find('.child-trigger').removeClass('child-open');
      $parent.find('.sub-menu').slideUp(250);

      $(this).next('.sub-menu').slideToggle(250);
      $(this).toggleClass('child-open');
      return false;
    });

    $('.mob-menu-overlay').on('click', function() {
      $('body').removeClass('mobile-open');
      $('body').removeClass('mobile-open-2');
      $('.child-trigger').removeClass('child-open');
      $('.mob-menu .sub-menu').slideUp(250);
      return false;
    });


    /*-------------------------------------------------------------------------------
    	  Video
    	-------------------------------------------------------------------------------*/
    $('.popup-youtube').magnificPopup({
      type: 'iframe'
    });
    $('.popup-vimeo').magnificPopup({
      type: 'iframe'
    });
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

    /*------------------------------------------------------------------
    	Intro-Slider
    	-------------------------------------------------------------------*/
    $('#intro .owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    /*-------------------------------------------------------------------------------
    	  Range-slider
    	-------------------------------------------------------------------------------*/

    $(".js-range-slidersj").ionRangeSlider({
      type: "double",
      skin: "round",
      hide_min_max: true,
      min: 0,
      max: 1000,
      from: 1,
      to: 1000,
      grid: false,
      prefix: "$"
    });

    /*------------------------------------------------------------------
    	Causes-Slider
    	-------------------------------------------------------------------*/
    $('#causes .owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    /*------------------------------------------------------------------
        Event Verticle-slick-Slider
        -------------------------------------------------------------------*/

    if ($('.mawlad-slider').length) {
      $('.mawlad-slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2500,
        dots: false,
        arrows: true,
        prevArrow: $('.sj-left-arrow'),
        nextArrow: $('.sj-right-arrow'),
        vertical: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }

    /*------------------------------------------------------------------
        shop-detail-slick-Slider
        -------------------------------------------------------------------*/

    if ($(".ss-slider-sync-content").length > 0) {
      $('.ss-slider-sync-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.ss-slider-sync-nav'
      });
      $('.ss-slider-sync-nav').slick({
        slidesToShow: $('.ss-slider-sync-nav').data('items'),
        slidesToScroll: 1,
        asNavFor: '.ss-slider-sync-content',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });

    }

    /*------------------------------------------------------------------
    	Testimonials-Slider
    	-------------------------------------------------------------------*/
    $('#testimonials .owl-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 4000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  });

  /*------------------------------------------------------------------
  	back to top
  	-------------------------------------------------------------------*/
  var top = $('#back-top');
  top.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      top.fadeIn();
    } else {
      top.fadeOut();
    }
  });
  $('#back-top a').on('click', function(e) {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });


  /*------------------------------------------------------------------
  	Increment SHOP DETAILS
  	-------------------------------------------------------------------*/
  $('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
      value = value - 1;
    } else {
      value = 0;
    }

    $input.val(value);

  });

  $('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
      value = value + 1;
    } else {
      value = 100;
    }

    $input.val(value);
  });

  $('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
  });


  $('.tick-type').on('click', function() {
    $(this).toggleClass('checked');
  });

  $('.plus').on('click', function() {
    $(this).prev().val(+$(this).prev().val() + 1);
  });
  $('.minus').on('click', function() {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
  });
  /*------------------------------------------------------------------
  	Countdown
  	-------------------------------------------------------------------*/
  // 2019[year] - 8[month] - 20[day]

  $('#countdown').countdown('2019/12/20', function(event) {
    $(this).html(event.strftime('<span class="countdown-period">%-D <span>Day%!D</span></span> <span class="countdown-period">%H <span>Hours</span></span> <span class="countdown-period">%M <span>Minutes</span></span> <span class="countdown-period">%S <span>Seconds</span></span>'));
  });

  /* -------------------------------------------------------------
	   gallery isotope
	------------------------------------------------------------- */
  // init Isotope after all images have loaded code
  var isotopeContainer = $('.gallery-masonry');
  $(isotopeContainer).imagesLoaded(function() {
    isotopeContainer.isotope({
      masonry: {
        itemSelector: '.gallery-item',
        columnWidth: '.grid-sizer',
      }
    });
  });

  $('.gallery-item.can-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  $('.gallery-sm .gallery-item').on('mouseover', function() {
    var $prev = $(this).prev();
    var $next = $(this).next();
    var $this = $(this);

    $prev.css({
      'opacity': '0.8'
    });
    $next.css({
      'opacity': '0.8'
    });
    $this.css({
      'opacity': '0.3'
    });
  });
  $('.gallery-sm .gallery-item').on('mouseout', function() {
    var $prev = $(this).prev();
    var $next = $(this).next();
    var $this = $(this);

    $prev.css({
      'opacity': '1'
    });
    $next.css({
      'opacity': '1'
    });
    $this.css({
      'opacity': '1'
    });
  });

  /* -------------------------------------------------------------
	   gallery isotope
	------------------------------------------------------------- */
  $('.gallery-isotope').imagesLoaded(function() {
    // init Isotope after all images have loaded code
    var isotopeContainer = $('.gallery-mesonary-nonprofit');
    isotopeContainer.isotope({
      itemSelector: '.gallery-item',
      masonry: {
        columnWidth: isotopeContainer.width() / 3,
      }
    });
  });

  /////////// sa-gallery-mesonary ////////////
  $('.sa-gallery-mesonary').imagesLoaded(function() {
    var isotopeContainer = $('.sa-gallery-mesonary');
    isotopeContainer.isotope({
      itemSelector: '.sa-gallery-item',
      masonry: {
        columnWidth: isotopeContainer.width() / 6,
      }
    });
  });


  // color switch
  $( ".each-color.co1" ).on('click', function(e) {
      var data1 = $(this).data('color');
      $(".color-changing").attr('href', data1);
  });

  $( ".each-color.co2" ).on('click', function(e) {
      var data1 = $(this).data('color');
      $(".color-changing").attr('href', data1);
  });

  $( ".each-color.co3" ).on('click', function(e) {
      var data1 = $(this).data('color');
      $(".color-changing").attr('href', data1);
  });

  $( ".each-color.co4" ).on('click', function(e) {
      var data1 = $(this).data('color');
      $(".color-changing").attr('href', data1);
  });

  $( ".each-color.co5" ).on('click', function(e) {
      var data1 = $(this).data('color');
      $(".color-changing").attr('href', data1);
  });

  $( ".each-color.co6" ).on('click', function(e) {
      var data1 = $(this).data('color');
      $(".color-changing").attr('href', data1);
  });

  $( ".each-color.co7" ).on('click', function(e) {
      var data1 = $(this).data('color');
      $(".color-changing").attr('href', data1);
  });

  $( ".each-color.co8" ).on('click', function(e) {
      var data1 = $(this).data('color');
      $(".color-changing").attr('href', data1);
  });

  $( ".each-color.co9" ).on('click', function(e) {
      var data1 = $(this).data('color');
      $(".color-changing").attr('href', data1);
  });


})(jQuery);
