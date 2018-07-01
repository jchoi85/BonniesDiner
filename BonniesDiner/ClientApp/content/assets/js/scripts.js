/*
 *  File name: Scritps.js
 *  All main scripts are here
 */

;(function($) {
  'use strict';

  /*
   * Isotope call script
   */

  if ($('.an-portfolio-section').length > 0) {
    var $grid = $('.an-portfolio-section .row').isotope({
      // options
      itemSelector: '.col-md-3',
    });

    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  }

  /*
   * User short description limit
   * */
  var shortDescription = $('.short-desc');
  if (shortDescription.length > 0) {
    shortDescription.text(function (index, currentText) {
      return currentText.substr(0, 105) + '...';
    });
  }

  /*
   *
   * Default slider for every slider inside this template
   * If you want to change some slider style like increase item
   * better clone this code in the bottom then try.
   *
   */

  if ($('.default-slider').length > 0) {
    $('.default-slider').owlCarousel({
      items: 1,
      singleItem: true,
      autoPlay: true,
      navigation: true,
      //navigationText: ['&#xe934', '&#xe932'],
      pagination: true,
    });
  }


  /*
   * Scroll based class on header
   */
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll >= 200) {
      $(".navbar-default").addClass("dark");
    } else {
      $(".navbar-default").removeClass("dark");
    }
  });

  /*
   * Scrollspy anition
   */

  $(".navbar-nav li a[href^='#']").on('click', function(e) {
    $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);

    // edit: Opera and IE requires the "html" elm. animated
  });

})(jQuery);


/*
 * Initialize wow js for scrolling aniamtion
*/
new WOW().init();

