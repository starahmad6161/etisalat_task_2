

$(document).ready(function(){
    $(".champSlider .owl-carousel").owlCarousel({
        center: true,
        items:1.5,
        loop:false,
        margin:10,
        startPosition: 1,
        responsive:{
            992:{
                items: 3
            }
        }
    });
    $(".studio .owl-carousel").owlCarousel({
        center: true,
        items: 2.5,
        loop:false,
        margin:10,
        startPosition: 1,
        responsive:{
            992:{
                items: 3
            }
        }
    });
});