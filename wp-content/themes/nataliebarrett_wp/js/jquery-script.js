jQuery( document ).ready(function() {
  jQuery(this).scrollTop(0);
  cloneContent()
  removeHrefFromMenu()
  parallax(jQuery("#natalie .quote-content"), 2);
  parallax(jQuery("#natalie img"), -2);
  fadeInContentOnScroll('.cloned-content .post ', '10px')
  fadeInContentOnScroll('#about .quote-content', '150px')
  fadeInContent('.section-content', '0')
  setTimeout(function(){
    fadeInContent('#natalie .quote-content', '35vh')
  }, 500)
})

var lastScrollTop = 0;

jQuery(window).on('scroll', function() {
  scrollTop = jQuery(this).scrollTop();
  if(scrollTop < lastScrollTop) {
    jQuery('#primary-menu').fadeIn()
  }
  else {
    jQuery('#primary-menu').fadeOut()
  }
  lastScrollTop = scrollTop;
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
    // console.log("eq", jQuery(hashAnchor).eq()  )  
    jQuery('html, body').animate({scrollTop: (targetAnchor) }, 1500);
  });
});

function fadeInContentOnScroll(content, top){
  jQuery(window).scroll( function(){
    jQuery(content).each( function(i){
      var bottom_of_object = jQuery(this).offset().top + jQuery(this).outerHeight();
      var bottom_of_window = jQuery(window).scrollTop() + jQuery(window).height();
      if( bottom_of_window > bottom_of_object ){
        fadeInContent(this, top)
      }
    })
  })
} 

function fadeInContent(content, top){
  jQuery(content).animate({'opacity':'1', 'padding-top': top},1500); 
}

function parallax(object, speed){
  jQuery(window).scroll(function(){
    var win = jQuery(window);
    obj = jQuery(object.parent());
    var scrollPosition = win.scrollTop();
    var visibleArea = win.scrollTop() + win.height();
    var objEndPos = (obj.offset().top + obj.outerHeight());
    var trueFalse = (visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
    if (trueFalse == true){
      var doc = jQuery(document).scrollTop();
      var objTop = jQuery(obj).position().top;
      object.css({"top" : (doc / (-speed )) });
    }
  });
};
