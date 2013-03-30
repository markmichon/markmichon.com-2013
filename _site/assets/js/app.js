// $('body').css('display', 'none');
$(document).ready(function() {
  //Global Vars
  var $pageTitle = $('.page-title');
  var $aboutTitle = $('.about-title');
  var $navButton = $('.nav-toggle');
  var $navList = $('.nav');
  var $toTop = $('.js-top');
  //FitText Assignments
  $pageTitle.fitText(1.2, { minFontSize: '29px', maxFontSize: '47px' });
  $aboutTitle.fitText(1.2, { minFontSize: '29px' });

  // $("body").fadeIn(1000);
  //Back to top link
  $toTop.on('click', function(e){
    e.preventDefault();
    $('body').animate({
      scrollTop: 0},
      400);
  });

  // if (document.documentElement.clientWidth < 700) {

  $navButton.on('click touch', $navButton, function(){
    if ($navList.hasClass('nav-open')) {
      $navList.toggleClass('nav-open');
      $navButton.toggleClass('current');

    } else {
    $navList.addClass('nav-open');
    $navButton.addClass('current');
    }
  });



 // } // end sub 700 check

 }); // end document.ready
 //@TODO - Fix animation on