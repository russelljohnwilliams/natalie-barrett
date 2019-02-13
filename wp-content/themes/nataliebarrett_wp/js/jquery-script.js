jQuery( document ).ready(function() {
  jQuery(this).scrollTop(0);
  cloneContent()
  removeHrefFromMenu()
  parallax(jQuery("#home .page_title"), -3);
  parallax(jQuery("#home .section-content"), -3);
  setWorkArticleHeight()


  if (jQuery(window).width() > 600) {
   fadeInContentOnScroll('.cloned-content  ', '0')
   fadeInContentOnScroll('#quote1 .section-content', '20px')
   fadeInContentOnScroll('#quote2 .section-content', '20px')
   fadeInContentOnScroll('#quote3 .section-content', '20px')
   fadeInContentOnScroll('#work .section-content-wrapper')
   setTimeout(function(){
    fadeInContent('#home .section-content-wrapper')
  }, 500)
 }else{
   fadeInContentOnScroll('#home article')
   fadeInContentOnScroll('.cloned-content  ', '0px')
   fadeInContentOnScroll('#quote1 .section-content', '0')  
   fadeInContent('#home .section-content', '20px')
   setTimeout(function(){
    fadeInContent('#natalie .quote-content', '25vh')
  }, 500)
   rearangeNavBar()
   addCrossToNavBar()
   removeElements()
 }

})

function setWorkArticleHeight(){
  var article = jQuery('#work .cloned-content')
  var width = article.css('width')
  var int = parseInt(width, 10)
  var halfWidth = int / 2
  article.css({'height': (halfWidth+'px')})
}

jQuery(function() {
  jQuery("#work .cloned-content").hover(
    function(){  
      jQuery(this).find('.media-content').css("opacity", "1");
      jQuery(this).css("color", 'whitesmoke')
    }, 
    function(){
      jQuery(this).find('.media-content').css("opacity", "0");
      jQuery(this).css({"color": 'black'})

    });
})

jQuery(function(){
  if (jQuery(window).width() > 600) {
    jQuery('#site-navigation').mouseover(function(){
      jQuery('#primary-menu').fadeIn()
    })
  }
})

function removeElements(){
  $("#").remove();
}

function cloneContent(){
  jQuery(".post").clone().removeAttr('class').attr('class', "cloned-content content-to-clone").appendTo('#work .section-content-wrapper .section-content');
}

function rearangeNavBar(){
  jQuery( ".main-navigation li:nth-child(1)" ).appendTo( "#primary-menu" )  
  jQuery( ".main-navigation li:nth-child(1)" ).appendTo( "#primary-menu" )  
}

function addCrossToNavBar(){
  jQuery("#site-navigation").prepend("<div class='container'><div class='bar1'></div><div class='bar2'></div><div class='bar3'></div></div><div class='mobileHeader'>natalie barrett</div>");

}

function removeHrefFromMenu(){
  jQuery('.menu-item').find("a[href='#']").removeAttr("href").css("cursor","pointer");
}

jQuery(function() {
  jQuery('.menu-item').bind('click',function(event){
    var splitText = this.innerText.split(' ');
    var hashAnchor = "#" + splitText
    var targetAnchor = jQuery(hashAnchor).offset().top
    jQuery('html, body').animate({scrollTop: (targetAnchor) }, 1500);
  });
});

function fadeInContentOnScroll(content, top){
  console.log("scroll", content)
  jQuery(window).scroll( function(){
    jQuery(content).each( function(i){
      var bottom_of_object = jQuery(this).offset().top + jQuery(this).outerHeight();
      var bottom_of_window = jQuery(window).scrollTop() + jQuery(window).height() + 100;
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
    var obj = jQuery(object.parent());
    var scrollPosition = win.scrollTop();
    var visibleArea = win.scrollTop() + win.height();
    var objectEndPosition = (obj.offset().top + obj.outerHeight());
    var trueFalse = (visibleArea >= objectEndPosition && scrollPosition <= objectEndPosition ? true : false)
    if (trueFalse == true){
      var doc = jQuery(document).scrollTop();
      var objTop = jQuery(obj).position().top;
      object.css({"top" : (doc / (-speed )) });
    }
  });
};

jQuery(function() {
  jQuery('.container').bind('click',function(event){
    jQuery('.container').toggleClass("change");
    jQuery('#primary-menu').slideDown("slow");
  });
});




























