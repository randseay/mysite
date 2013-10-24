/* Fire swipebox */

$(".swipebox").swipebox({
  hidBarsDelay:0
});

/* Smooth Scroll */

$(document).ready(function() {

// Click event for any anchor tag that's href starts with #
$('a[href^="#"]').click(function(event) {

    // The id of the section we want to go to.
    var id = $(this).attr("href");

    // An offset to push the content down from the top.
    var offset = 20;

    // Our scroll target : the top position of the
    // section that has the id referenced by our href.
    var target = $(id).offset().top - offset;

    // The magic...smooth scrollin' goodness.
    $('html, body').animate({scrollTop:target}, 500);

    //prevent the page from jumping down to our section.
    event.preventDefault();

    });

});

/*
  Breakpoints.js
  version 1.0
  
  Creates handy events for your responsive design breakpoints
  
  Copyright 2011 XOXCO, Inc
  http://xoxco.com/

  Documentation for this plugin lives here:
  http://xoxco.com/projects/code/breakpoints
  
  Licensed under the MIT license:
  http://www.opensource.org/licenses/mit-license.php

*/
(function($) {

  var lastSize = 0;
  var interval = null;

  $.fn.resetBreakpoints = function() {
    $(window).unbind('resize');
    if (interval) {
      clearInterval(interval);
    }
    lastSize = 0;
  };

  $.fn.setBreakpoints = function(settings) {
    var options = jQuery.extend({
              distinct: true,
              breakpoints: new Array(1,350,630)
  },settings);


    interval = setInterval(function() {

      var w = $(window).width();
      var done = false;

      for (var bp in options.breakpoints.sort(function(a,b) { return (b-a) })) {
    
        // fire onEnter when a browser expands into a new breakpoint
        // if in distinct mode, remove all other breakpoints first.
        if (!done && w >= options.breakpoints[bp] && lastSize < options.breakpoints[bp]) {
          if (options.distinct) {
            for (var x in options.breakpoints.sort(function(a,b) { return (b-a) })) {
              if ($('body').hasClass('breakpoint-' + options.breakpoints[x])) {
                $('body').removeClass('breakpoint-' + options.breakpoints[x]);
                $(window).trigger('exitBreakpoint' + options.breakpoints[x]);
              }
            }
            done = true;
          }
          $('body').addClass('breakpoint-' + options.breakpoints[bp]);
          $(window).trigger('enterBreakpoint' + options.breakpoints[bp]);

        }      

        // fire onExit when browser contracts out of a larger breakpoint
        if (w < options.breakpoints[bp] && lastSize >= options.breakpoints[bp]) {
          $('body').removeClass('breakpoint-' + options.breakpoints[bp]);
          $(window).trigger('exitBreakpoint' + options.breakpoints[bp]);

        }
        
        // if in distinct mode, fire onEnter when browser contracts into a smaller breakpoint
        if (
          options.distinct && // only one breakpoint at a time
          w >= options.breakpoints[bp] && // and we are in this one
          w < options.breakpoints[bp-1] && // and smaller than the bigger one
          lastSize > w && // and we contracted
          lastSize >0 &&  // and this is not the first time
          !$('body').hasClass('breakpoint-' + options.breakpoints[bp]) // and we aren't already in this breakpoint
          ) {         
          $('body').addClass('breakpoint-' + options.breakpoints[bp]);
          $(window).trigger('enterBreakpoint' + options.breakpoints[bp]);

        }          
      }
      
      // set up for next call
      if (lastSize != w) {
        lastSize = w;
      }
    },250);
  };
  
})(jQuery);

/* Set Breakpoints */

$(window).setBreakpoints({
// use only largest available vs use all available
    distinct: true,
// array of widths in pixels where breakpoints
// should be triggered
    breakpoints: [
        1,
        350,
        630
    ]
});

$(window).bind('enterBreakpoint1',function() {
    //console.log('Entering 1 Breakpoint');
    $('.work li').removeClass().addClass('columns-1');
}); 

$(window).bind('enterBreakpoint350',function() {
    //console.log('Entering 350 Breakpoint');
    $('.work li').removeClass().addClass('columns-2');
    $('.work li:nth-child(odd)').removeClass('columns-2').addClass('columns-2-alpha');
});

$(window).bind('exitBreakpoint350',function() {
    //console.log('Exiting 350 Breakpoint');
    $('.work li').removeClass();
    $('.work li').addClass('columns-1');
});

$(window).bind('enterBreakpoint630',function() {
    //console.log('Entering 630 Breakpoint');
    $('.work li').removeClass().addClass('columns-3');
    $('.work li:nth-child(3n+1)').removeClass('columns-3').addClass('columns-3-alpha');
});

$(window).bind('exitBreakpoint630',function() {
    //console.log('Exiting 630 Breakpoint');
    $('.work li').removeClass();
});
