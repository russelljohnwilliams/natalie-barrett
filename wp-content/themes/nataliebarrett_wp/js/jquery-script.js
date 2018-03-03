jQuery( document ).ready(function() {
  console.log("jQuery works")

cloneContent()
removeHrefFromMenu()
})

function cloneContent(){
  jQuery(".hidden-posts-to-clone").clone().removeAttr('class').attr('class', ".cloned_content").appendTo('#work')
}

function removeHrefFromMenu(){
  jQuery('.menu-item').find("a[href='#']").removeAttr("href").css("cursor","pointer");
}

jQuery(function() {
  jQuery('.menu-item').bind('click',function(event){
  console.log("menu-item", this.innerText)
   
   var hashAnchor = "#" + this.innerText
   console.log("hashAnchor", hashAnchor)

  var targetAnchor = jQuery(hashAnchor).offset().top
  jQuery('html, body').animate({scrollTop: targetAnchor}, 1000);

  // jQuery(".quote-content").slideUp(targetAnchor);



  });
});





// jQuery(function() {
//   jQuery('.site-navigation'  a).bind('click',function(event){
//     var viewportPosition = jQuery('#viewport').offset().left;
//     var anchor = jQuery(this).find('.anchor-point')[0].innerText.toLowerCase()
//     var hashAnchor = "#" + anchor
//     var targetAnchor = jQuery(hashAnchor).offset().left
//     var targetAnchorSum = targetAnchor - viewportPosition 
//     var destination = targetAnchorSum + currentPosition
//     jQuery('#viewport').stop().animate({
//       scrollTop: (destination)
//     }, 1000);
//     currentPosition = destination
//     event.preventDefault();
//   });
// });