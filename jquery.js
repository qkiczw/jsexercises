$(function () {
   var $window = $(window);
   var $page = $('html');
   var $scrollBtn = $('#scroll-btn');
   var $showScrollBntMinValue = 500;

   function showScrollBtn() {
       if ($(this).scrollTop() > $showScrollBntMinValue) {
           console.log('show button');
           $scrollBtn.show();
       } else {
           $scrollBtn.hide();
       }

   }

   function scrollToTop() {
       $page.animate({ scrollTop: 0 }, 600);
   }

    $window.on('scroll', showScrollBtn);
    $scrollBtn.on('click', scrollToTop);


    // font size changer


});