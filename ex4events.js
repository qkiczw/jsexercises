$( function () {
    var $window = $(window);
    var $paragraph = $('p');




    function iconSlideAnimation() {
        if ($window.scrollTop() > 450) {
            console.log($window.scrollTop);
            $paragraph.animate({left: "10px"}, 400);
        }
    }

    $window.on('scroll', iconSlideAnimation);

});


