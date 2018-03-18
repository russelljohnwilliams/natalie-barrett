

jQuery( document ).ready(function() {
  cloneContent()
  jQuery(this).scrollTop(0);
  removeHrefFromMenu()
  background_image_parallax(jQuery("#natalie .quote-content"), 2);
  background_image_parallax(jQuery("#natalie img"), -2);
  // background_image_parallax(jQuery('#about .quote-content'), 2, jQuery('#about'));
  // background_image_parallax(jQuery("#natalie .section-title"), -5);
  // background_image_parallax(jQuery("#work"), 3);
  // background_image_parallax(jQuery("#about"), 1 );
  // background_image_parallax(jQuery(".site-footer"), 2 );
  fadeInContentOnScroll('.cloned-content .post ', '0')
  fadeInContentOnScroll('#about .quote-content', '650px')
  // changeBackgroundOnScroll('#work', "#7BC6CC")
  // changeBackgroundOnScroll('#about', "#BE93C5")
  fadeInContent('.section-content', '0')
  setTimeout(function(){
    fadeInContent('#natalie .quote-content', '250px')
  }, 500)
})

var lastScrollTop = 0;

jQuery(window).on('scroll', function() {
  st = jQuery(this).scrollTop();
  if(st < lastScrollTop) {
    jQuery('#primary-menu').fadeIn()
  }
  else {
    jQuery('#primary-menu').fadeOut()
  }
  lastScrollTop = st;
});

jQuery(function(){
  jQuery('#site-navigation').mouseover(function(){
    jQuery('#primary-menu').fadeIn()
  })
})

function cloneContent(){
  jQuery(".content-to-clone").clone().removeAttr('class').attr('class', "cloned-content content-to-clone").appendTo('#work .section-content-wrapper');
  jQuery(".hidden").remove();
}

function removeHrefFromMenu(){
  jQuery('.menu-item').find("a[href='#']").removeAttr("href").css("cursor","pointer");
}

jQuery(function() {
  jQuery('.menu-item').bind('click',function(event){ 
    var splitText = this.innerText.split(' ');
    var hashAnchor = "#" + splitText
    var targetAnchor = jQuery(hashAnchor).offset().top
    console.log("goooooo", targetAnchor)
    jQuery('html, body').animate({scrollTop: (targetAnchor) }, 1000);
  });
});

function fadeInContentOnScroll(content){
  jQuery(window).scroll( function(){
    jQuery(content).each( function(i){

      var bottom_of_object = jQuery(this).offset().top + jQuery(this).outerHeight();
      var bottom_of_window = jQuery(window).scrollTop() + jQuery(window).height();
      if( bottom_of_window > bottom_of_object ){
        fadeInContent(this)

      }
    })
  })
}

// function changeBackgroundOnScroll(content, colour){
//   jQuery(window).scroll( function(){
//     jQuery(content).each( function(i){
//       var siteContent = jQuery('.site-content')
//       var top_of_object = jQuery(this).offset().top;
//       var top_of_window = jQuery(window).scrollTop();
//       if( top_of_window > (top_of_object - 100) ){
//         siteContent.css({ "background": colour })
//         console.log('top_of_object', top_of_object) 
//         console.log('top_of_window', top_of_window) 
//       }
//     })
//   })
// }

function fadeInContent(content, top){
  jQuery(content).animate({'opacity':'1', 'padding-top': top},1500); 
}

// function direction_of_fade(object){
//   object.css({direction : (0) });
// }

function background_image_parallax(object, speed, obj){
  jQuery(window).scroll(function(){
    // if(object.parent()  ){
    // console.log('name', object.parent().parent())
    // var offset = jQuery('#about')
    // console.log('offset', obj.css('top'))

  // }
    var doc = jQuery(document).scrollTop()
    // var doc = jQuery(object.parent()).scrollTop()
    object.css({"top" : (doc / (-speed )) });
  });
};


// function background_image_parallax(object, speed){
//   jQuery(window).scroll(function(){
//     console.log('quote', object.css('top'))
//     var doc = jQuery(document).scrollTop()
//     // var doc = jQuery(object.parent()).scrollTop()
//     object.css({"top" : (doc / (-speed )) });
//   });
// };


// function background_image_parallax(object, multiplier){
//   // multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.7;
//   // multiplier = 1 + multiplier;
//   var doc = jQuery(document);
//   jQuery(window).scroll(function(){
//     var doc_from_top = jQuery(document).scrollTop()
//     // console.log('quote-content', jQuery('.quote-content').css('top'))

//     object.css({"top" : (doc_from_top / (-1 )) });

//   });
// };









