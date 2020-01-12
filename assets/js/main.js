(function ($) {
	"use strict"; 

// responsive menu
   $('.main-menu').meanmenu({
        meanMenuContainer: '.header-area', 
    }); 


// search area here
	$(".search-btns").click(function(){
		$(".search_area").toggleClass('active')
	})
 // owl carousel hero-area
 $(".owl-active").owlCarousel({
 	items:1,
 	loop:true,
 	nav:true,
 	navText:['BACK', 'NEXT']
 })

 // owl carousel product-area
$('.product-slider-active').owlCarousel({
	items:4,
    loop:true,
    margin:10,
    nav:true,
    navText:['BACK', 'NEXT'],
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// brend-logo slider
$('.brend-logo-active').owlCarousel({
	items:6,
    loop:true,
    margin:10, 
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        600:{
            items:5
        },
        1000:{
            items:6
        }
    }
})

$(".main").tiltedpage_scroll({
    sectionContainer: "> section",      
    angle: 100,                          
    opacity: true,                      
    scale: true,     
    outAnimation: true                  
  });




























}(jQuery));	