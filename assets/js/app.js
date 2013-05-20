// $('body').css('display', 'none');
$(document).ready(function() {
  //Global Vars
  var $pageTitle = $('.page-title');
  var $aboutTitle = $('.about-title');
  var $navButton = $('.nav-toggle');
  var $navList = $('.nav');
  var $toTop = $('.js-top');
  var $globalHead = $('.global-head');
  prevTop = $(window).scrollTop();
  //FitText Assignments
  $pageTitle.fitText(1.2, { minFontSize: '29px', maxFontSize: '64px' });
  $aboutTitle.fitText(1.2, { minFontSize: '29px' });

//Scroll events
$(window).on('scroll', function(e) {
  st = $(this).scrollTop();
  if (st > prevTop && st > 61) {
    $globalHead.addClass('global-head-scrolling');
  } else {
    $globalHead.removeClass('global-head-scrolling');
  }
  prevTop = st;
});


  // $("body").fadeIn(1000);
  //Back to top link
  $toTop.on('click', function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: 0},
      400);
  });


  $navButton.on('click touch', $navButton, function(){
    if ($navList.hasClass('nav-open')) {
      $navList.toggleClass('nav-open');
      $navButton.toggleClass('current');

    } else {
    $navList.addClass('nav-open');
    $navButton.addClass('current');
    }
  });


 }); // end document.ready
 //@TODO - Fix animation on