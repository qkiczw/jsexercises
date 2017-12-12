$(function () {
   var $window = $(window);
   var $page = $('html');
   var $scrollBtn = $('#scroll-btn');
   var $showScrollBntMinValue = 500;

   function showScrollBtn() {
       if ($(this).scrollTop() > $showScrollBntMinValue) {
           console.log($(this).scrollTop());
           $scrollBtn.show();
       }

   }

   function scrollToTop() {
       $page.animate({ scrollTop: 0 }, 600);
   }

    $window.on('scroll', showScrollBtn);
    $scrollBtn.on('click', scrollToTop);


});