jQuery( document ).ready(function() {
  cloneContent()
  removeHrefFromMenu()
  fadeInContentOnScroll('.cloned-content .post')
  fadeInContent('.section-content')
  setTimeout(function(){
  fadeInContent('.quote-content')

  }, 500)
})

function cloneContent(){
  jQuery(".content-to-clone").clone().removeAttr('class').attr('class', "cloned-content content-to-clone").appendTo('#work .section-content-wrapper')
}

function removeHrefFromMenu(){
  jQuery('.menu-item').find("a[href='#']").removeAttr("href").css("cursor","pointer");
}

jQuery(function() {
  jQuery('.menu-item').bind('click',function(event){   
   var hashAnchor = "#" + this.innerText
   var targetAnchor = jQuery(hashAnchor).offset().top
   jQuery('html, body').animate({scrollTop: targetAnchor}, 1000);
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

function fadeInContent(content){
  jQuery(content).animate({'opacity':'1'},1500);
}