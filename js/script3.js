$(document).ready(function() {
			$(".fancybox").fancybox();
			});

// Add class when the window is resized

var $window = $(window);
var firstCol1 = $('.work li');
var firstCol2 = $('.work li:nth-child(odd)');
var firstCol3 = $('.work li:nth-child(3n+1)');
var width = $(window).width();

$window.resize(function(){
   // if(width > 630 ){
   //     $('.work li').removeClass('columns-2').addClass('columns-3');
   //     $('.work li:nth-child(3n+1)').removeClass('columns-3').addClass('columns-3-alpha');
   //     $(firstCol1).removeClass('').addClass('columns-3');
   //     $(firstCol3).removeClass('columns-3').addClass('columns-3-alpha');
   // }
   if(width <= 630 && width > 350){
       // $('.work li').removeClass('columns-3').addClass('columns-2');
       // $('.work li:nth-child(odd)').removeClass('columns-2').addClass('columns-2-alpha');
       $(firstCol1).removeClass('').addClass('columns-2');
       $(firstCol2).removeClass('columns-2').addClass('columns-2-alpha');
   }
   else{
        $(firstCol1).removeClass('').addClass('columns-3');
        $(firstCol3).removeClass('columns-3').addClass('columns-3-alpha');
   }
   // else{
   //     $('.work li').removeClass('columns-2').addClass('columns-3');
   //     $('.work li:nth-child(3n+1)').removeClass('columns-3').addClass('columns-3-alpha');
   // }
   if(width <= 350){
       // $('.work li').removeClass('columns-2').addClass('columns-1');
       $(firstCol1).removeClass('').addClass('columns-1');
   }
   //console.log('resize called');
})
.resize();