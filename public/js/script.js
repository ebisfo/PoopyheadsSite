'use strict';

( function ( $ ) {
  $(document).ready(function(){

  jQuery('img.svg').each(function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

      }, 'xml');

  });

    $(".hero-images").owlCarousel( {
      loop: true,
      margin: 17,
      autoplay: true,
      // autoplayTimeout: 600,
      autoplayHoverPause: false,
      dots: false,
      slideTransition: 'linear',
    autoplaySpeed: 6000,
    smartSpeed: 6000,
      responsive: {
        0: {
          stagePadding: 25,
          items: 1,
          loop: true
        },
        375: {
          stagePadding: 25,
          items: 2,
          loop: true
        },
        425: {
          stagePadding: 25,
          items: 3,
          loop: true
        },
        768: {
          stagePadding: 25,
          items: 4,
          loop: true
        },
        992: {
          stagePadding: 50,
          items: 5,
          loop: true
        },
        1200: {
          stagePadding: 50,
          items: 6,
          loop: true
        },
        1400: {
          stagePadding: 75,
          items: 7,
          loop: true
        },
      }
    } );

    $(".team-carousel").owlCarousel( {
      loop: false,
      margin: 20,
      responsive: {
        0: {
          items: 1,
        },
        450: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1200: {
          items: 4,
        },
        1400: {
          items: 4,
        },
      }
    } );

    $(".benefits-carousel-top").owlCarousel( {
      loop: true,
      dots: false,
      margin: 0,
      autoWidth: true,
      stagePadding: 150,
      smartSpeed: 250,
      fluidSpeed: 250,
      responsiveRefreshRate: 250,
      slideTransition: 'cubic-bezier(0.4, 0, 1, 1)',
      responsive: {
        0: {
          items: 2,
        },
        565: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 5,
        },
        1400: {
          items: 5,
        },
      }
    } );

    $(".benefits-carousel-down").owlCarousel( {
      loop: true,
      dots: false,
      margin: 0,
      autoWidth: true,
      stagePadding: 150,
      smartSpeed: 250,
      fluidSpeed: 250,
      responsiveRefreshRate: 250,
      slideTransition: 'cubic-bezier(0.4, 0, 1, 1)',
      responsive: {
        0: {
          items: 2,
        },
        565: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
        1400: {
          items: 4,
        },
      }
    } );

    $(".partners-carousel").owlCarousel( {
      loop: true,
      dots: true,
      margin: 20,
      stagePadding: 10,
      responsive: {
        0: {
          items: 3,
        },
        565: {
          items: 3,
        },
        992: {
          items: 5,
        },
        1200: {
          items: 7,
        },
        1400: {
          items: 7,
        },
      }
    } );

    /* Dropdown script */
    $( '.roadmap__drop-down-list-title' ).on( 'click', function() {
      if ( ! $( this ).hasClass( 'roadmap__drop-down-list-title--open' ) ) {
        $( this )
          .parents('.roadmap')
          .find('.roadmap__drop-down-list-title')
          .removeClass( 'roadmap__drop-down-list-title--open' )
          .siblings( '.roadmap__drop-down-list-desc' )
          .slideUp( 'fast' );
      }
      $( this )
        .toggleClass( 'roadmap__drop-down-list-title--open' )
        .siblings( '.roadmap__drop-down-list-desc' )
        .slideToggle( 'fast' );
    });

    $( '.faq__list-item-title' ).on( 'click', function() {
      if ( ! $( this ).hasClass( 'faq__list-item-title--open' ) ) {
        $( this )
          .parents('.faq')
          .find('.faq__list-item-title')
          .removeClass( 'faq__list-item-title--open' )
          .siblings( '.faq__list-item-desc' )
          .slideUp( 'fast' );
      }
      $( this )
        .toggleClass( 'faq__list-item-title--open' )
        .siblings( '.faq__list-item-desc' )
        .slideToggle( 'fast' );
    });
    /* -- Dropdown script -- */

    /* Mobile menu script */
    $( '.mobile-menu__btn' ).on( 'click', function() {
        $( '.mobile-menu' ).toggleClass( 'mobile-menu--open' );
        $( 'html, body' ).toggleClass( 'overflow-hidden' );
     });
    /* -- Mobile menu script -- */

    /* Animation button */
    $( '.btn' ).each( function() {
      let btn = $( this );
      let wordSplit = $( btn ).text().split( '' );
      let wordSplitWord = '';
      let delay = 0.01;
      for ( let i = 0; i < wordSplit.length; i++ ) {
        wordSplitWord += `<span style="position:relative; opacity:1; animation-delay:${ delay.toFixed(2) }s">${wordSplit[i]}</span>`;
        delay +=  0.02;
      }
      $( btn ).text( '' ).append( wordSplitWord );
    });
    /* -- Animation button -- */

    /* Move elements on scroll */
    $( document ).scroll( function ( e ) {
      const blocks = $( '.benefits' );
      if ( blocks ) {
        $( blocks ).each( function ( i, el ) {
          const coord = $( el ).offset();

          if (
            $( window ).height() + $( window ).scrollTop() >=
              coord.top &&
            $( window ).scrollTop() - ( coord.top + 25 ) < 0
          ) {
            $('.benefits-carousel-top .owl-stage').css({'transform': 'translate3d(-1701px, 0px, 0px)'});
            $('.benefits-carousel-down .owl-stage').css({'transform': 'translate3d(-1901px, 0px, 0px)'});
          } else {
            $('.benefits-carousel-top .owl-stage').css({'transform': 'translate3d(-1901px, 0px, 0px)'})
            $('.benefits-carousel-down .owl-stage').css({'transform': 'translate3d(-1701px, 0px, 0px)'})
          }
        } );
      }
    } );
    /* -- Move elements on scroll -- */


  if ( $( '.top-sales__slider').length !== 0 ) {
    function startSetup( sliderSize, slideSize, animationDuration, autoplayInterval ) {

      this.sliderSize        = parseFloat( sliderSize )/100;
      this.slideSize         = parseFloat( slideSize )/100;
      this.animationDuration = parseFloat( animationDuration );
      this.autoplayInterval  = parseFloat( autoplayInterval );

    };

    function Slider( newSlider, sliderSize, slideSize, animationDuration, autoplayInterval ) {

        this.startSetup           = new startSetup( sliderSize, slideSize, animationDuration, autoplayInterval ),

        this.wrapper              = newSlider.querySelector( '.wrapper' );

        this.slides               = newSlider.querySelectorAll( '.circular-slider .wrapper .slides-holder .slides-holder__item' );

        this.slidesSize           = 0;

        this.descriptions         = newSlider.querySelectorAll( '.circular-slider .wrapper .descriptions .descriptions__item' );

        this.slidesHolder         = newSlider.querySelector( '.circular-slider .wrapper .slides-holder' );

        this.btnLeft              = newSlider.querySelector( '.circular-slider .wrapper .controls .controls__left' );

        this.btnRight             = newSlider.querySelector( '.circular-slider .wrapper .controls .controls__right' );

        this.currentAngle         = 0;

        this.stepAngle            = 2*Math.PI/newSlider.querySelectorAll( '.circular-slider .wrapper .slides-holder .slides-holder__item' ).length;

        this.currentSlide         = 0;

        this.slidesHolder.style.transitionDuration = this.startSetup.animationDuration + 'ms';
        this.onResize();
        this.setNav();
        this.addStyle();

    };

    Slider.prototype.onResize = function() {

        let radius,
            w = this.wrapper.parentNode.getBoundingClientRect().width,
            h = this.wrapper.parentNode.getBoundingClientRect().height;

        2*h <= w ? radius = h*this.startSetup.sliderSize
                 : radius = ( w/2 )*this.startSetup.sliderSize;

        this.setSize( Math.round( radius ) );

    };

    Slider.prototype.setSize = function( radius ) {

        let r                         = 2.7*radius*( 1 - this.startSetup.slideSize );
        this.slidesHolder.style.width = this.slidesHolder.style.height = r + 'px';
        this.slidesRepositioning( r/2 );

        this.slidesHolder.style.marginTop    = radius*this.startSetup.slideSize + 'px';


        this.slidesSize                        = Math.min( 2*radius*this.startSetup.slideSize, this.stepAngle*radius*( 1 - this.startSetup.slideSize ) - 50 );

        for( let i = 0; i < this.slides.length; i++ ) {
            this.slides[i].style.width = this.slides[i].style.height = this.slidesSize + 'px';
        };

    };

    Slider.prototype.slidesRepositioning = function( r ) {

        for( let i = 0; i < this.slides.length; i++ ) {

            let x = r*Math.cos( this.stepAngle*i - Math.PI/2 ),
                y = r*Math.sin( this.stepAngle*i - Math.PI/2 );
            this.slides[i].style.transform = 'translate( ' + x  + 'px, ' + y + 'px ) rotate( ' + this.stepAngle*180/Math.PI*i + 'deg )';

        };

    };

    Slider.prototype.rotate = function( multiplier ) {

        let _this = this;

        this.removeStyle();
        this.resetNavs();

        if( this.currentSlide === this.slides.length - 1  && multiplier === -1 ) {

            this.slidesHolder.style.transform     = 'rotate( -360deg )';
            this.currentSlide = this.currentAngle = 0;
            this.addStyle();

            setTimeout( function(){

                _this.slidesHolder.style.transitionDuration = 0 + 's';
                _this.slidesHolder.style.transform          = 'rotate( ' + _this.currentAngle + 'deg )';
                setTimeout( function() { _this.slidesHolder.style.transitionDuration = _this.startSetup.animationDuration + 'ms'; }, 20 );

            }, this.startSetup.animationDuration );

        } else if ( this.currentSlide === 0 && multiplier === 1 ) {

            this.slidesHolder.style.transform = 'rotate( ' + this.stepAngle*180/Math.PI + 'deg )';
            this.currentSlide                 = _this.slides.length - 1;
            this.currentAngle                 = -( 2*Math.PI - _this.stepAngle )*180/Math.PI;
            this.addStyle();

            setTimeout( function(){

                _this.slidesHolder.style.transitionDuration = 0 + 's';
                _this.slidesHolder.style.transform = 'rotate( ' + _this.currentAngle + 'deg )';
                setTimeout( function() { _this.slidesHolder.style.transitionDuration = _this.startSetup.animationDuration + 'ms'; }, 20 );

            }, this.startSetup.animationDuration );

        } else {

            this.currentSlide                -= multiplier;
            this.currentAngle                += ( this.stepAngle*180/Math.PI )*multiplier;
            this.slidesHolder.style.transform = 'rotate( ' + this.currentAngle + 'deg )';
            this.addStyle();

        };

    };

    Slider.prototype.setNav = function() {

        let _this              = this;
        _this.btnLeft.onclick  = function() { _this.rotate(1) };
        _this.btnRight.onclick = function() { _this.rotate(-1) };

    };

    Slider.prototype.disableNav = function() {

        this.btnLeft.onclick  = null;
        this.btnRight.onclick = null;

    };

    Slider.prototype.setAutoplay = function() {
        let _this     = this;
        this.autoplay = setInterval( function() { _this.rotate(-1) }, _this.startSetup.autoplayInterval + 20 );
    };

    Slider.prototype.removeStyle = function() {

        let x = this.currentSlide;
        this.slides[x].classList.remove( 'slides-holder__item_active' );
        this.slides[x].style.height = this.slides[x].style.width = this.slidesSize + 'px';

    };

    Slider.prototype.addStyle = function() {

        let x = this.currentSlide;
        this.slides[x].classList.add( 'slides-holder__item_active' );
        this.slides[x].style.height = this.slides[x].style.width = this.slidesSize + 20 + 'px';

    };

    Slider.prototype.resetNavs = function() {

        let _this = this;

        this.disableNav();
        setTimeout( function(){ _this.setNav() }, this.startSetup.animationDuration + 20 );
        if ( this.autoplay != null ) {
            clearInterval( this.autoplay );
            this.setAutoplay();
        };

    };

    /* Init sliders */
    window.circularSlider1 = new Slider( document.querySelector( '.top-sales__slider' ), 100, 15, 600, 2500 );

    let sliders = [ window.circularSlider1 ];

    window.onresize = function() {

        for ( let i = 0; i < sliders.length; i++ ){

            sliders[i].resetNavs();
            sliders[i].onResize();

        };

    };
  }

  });
} )( jQuery );
