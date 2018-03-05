jQuery( document ).ready(function() {
  cloneContent()
  jQuery(this).scrollTop(0);

  removeHrefFromMenu()
  //Just pass the jQuery object
  background_image_parallax(jQuery("#natalie .quote-content"), 0.2);

  //optional second value for speed
  // background_image_parallax(jQuery(".box3"), 0.25);
  fadeInContentOnScroll('.cloned-content .post')
  fadeInContent('.section-content')
  setTimeout(function(){
    fadeInContent('.quote-content')
  }, 500)

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











// function background_image_parallax(object, multiplier){
//     multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.7;
//     multiplier = 1 + multiplier;
//     var padding = jQuery(object).css('padding-top')
//     var doc = jQuery(document);
//     jQuery(window).scroll(function(){
//       var from_top = doc.scrollTop()
//           var parse = parseFloat(padding);
//           var sum = (parse - (from_top / 2) )
//       object.css({"top" : sum });
     
//     });
// };










