$(function () {
    var $fontSizeChanger = $('#font-size-changer');
    var $fonSizeBtnUp = $('.font-size-btn-up');
    var $fonSizeBtnNormal = $('.font-size-btn-normal');
    var $fonSizeBtnDown = $('.font-size-btn-down');
    var $buttons = $('.buttons');
    var $text = $('.text');
    var $fontSizeMenuSlider = $('.font-size-change-slider')


    $fonSizeBtnUp.on('click', function () {
        $text.css('font-size', '30px');

    });
    $fonSizeBtnNormal.on('click', function () {
        $text.css('font-size', '20px');

    });
    $fonSizeBtnDown.on('click', function () {
        $text.css('font-size', '10px');

    });
    $fontSizeMenuSlider.on('click', function () {
        $buttons.slideToggle(600);
    })

});