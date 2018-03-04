jQuery( document ).ready(function() {
  cloneContent()
  removeHrefFromMenu()
  fadeInContent()
})

function cloneContent(){
  jQuery(".content-to-clone").clone().removeAttr('class').attr('class', "cloned-content content-to-clone").appendTo('#work .section-content-wrapper')
}

function removeHrefFromMenu(){
  jQuery('.menu-item').find("a[href='#']").removeAttr("href").css("cursor","pointer");
}

function fadeInContent(){
  jQuery('.cloned-content')
}

jQuery(function() {
  jQuery('.menu-item').bind('click',function(event){   
   var hashAnchor = "#" + this.innerText
   var targetAnchor = jQuery(hashAnchor).offset().top
   jQuery('html, body').animate({scrollTop: targetAnchor}, 1000);
 });
});


