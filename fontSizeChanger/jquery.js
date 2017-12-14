$(function () {
    var $fontSizeChanger = $('#font-size-changer');
    var $fonSizeBtnUp = $('.font-size-btn-up');
    var $fonSizeBtnNormal = $('.font-size-btn-normal');
    var $fonSizeBtnDown = $('.font-size-btn-down');
    var $buttons = $('.buttons');
    var $text = $('.text');
    var $fontSizeMenuSlider = $('.font-size-change-slider')
    var $title = $('h1');

    $fonSizeBtnUp.on('click', function () {
        $text.css('font-size', '2em');

    });
    $fonSizeBtnNormal.on('click', function () {
        $text.css('font-size', '1em');

    });
    $fonSizeBtnDown.on('click', function () {
        $text.css('font-size', '0.5em');

    });
    $fontSizeMenuSlider.on('click', function () {
        $buttons.slideToggle(600);
    })

    $title.animate({left: "10px"}, 600);
    $text.animate({right: '0px'}, 1200);

});