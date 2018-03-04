jQuery( document ).ready(function() {
  cloneContent()
  removeHrefFromMenu()
  
  jQuery(window).scroll( function(){
    fadeInContent('.category-video')
  })
  fadeInContent('.quote-content')
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

function fadeInContent(content){

  /* Every time the window is scrolled ... */
  console.log('content?', content)
  /* Check the location of each desired element */
  jQuery(content).each( function(i){

    var bottom_of_object = jQuery(this).offset().top + jQuery(this).outerHeight();
    var bottom_of_window = jQuery(window).scrollTop() + jQuery(window).height();

    /* If the object is completely visible in the window, fade it it */
    if( bottom_of_window > bottom_of_object ){

      jQuery(this).animate({'opacity':'1'},2000);
    }
  })

}


jQuery(function(){
 
})