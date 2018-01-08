$(function () {

var $test = $('.test');
var $subtitle = $('.subtitle');


$test.addClass('fontColor');
$subtitle.text('To jest podtytuł!!!');


var $button = $('.button');

$button.on({
    mouseenter: function() {
        $(this).css('background-color', 'orange');
        console.log( "hovered over a div" );
    },
    mouseleave: function() {
        $(this).css('background-color', 'orangered');
        console.log( "mouse left a div" );
    },
    click: function() {
        console.log( "clicked on a div" );
    }
});


$test.on({
    mouseenter: function() {
        console.log( "hovered over a div" );
    },
    mouseleave: function() {
        console.log( "mouse left a div" );
    },
    click: function() {
        console.log( "clicked on a div" );
    }
});


$button.append('<div>To jest drugi Div</div>').addClass('secondDiv');
});

