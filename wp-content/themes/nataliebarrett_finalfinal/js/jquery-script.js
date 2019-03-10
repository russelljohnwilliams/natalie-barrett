jQuery( document ).ready(function() {
  jQuery(this).scrollTop(0);
  cloneContent()
  removeHrefFromMenu()
  parallax(jQuery("#home .section-content-wrapper"), -3);
  setClonedContentHeight()
  setTimeout(function(){
    fadeInContent('#home .section-content-wrapper')
  }, 500)

  if (jQuery(window).width() > 600) {
   fadeInContentOnScroll('#quote1 .section-content')
   fadeInContentOnScroll('#quote2 .section-content')
   fadeInContentOnScroll('#quote3 .section-content')
   removeNavExpandButton()
 }else{
  createMobileHeader()
}
})

// Function to display background image of #work article on HOVER

jQuery(function() {
  if (jQuery(window).width() > 600) {
    jQuery("#work .cloned-content").hover(
      function(){  
        jQuery(this).find('.background-image').css({"opacity": "1", "height": '104%', "width": "104%", 'top': '-2%', 'left': '-2%'});
      }, 
      function(){
        jQuery(this).find('.background-image').css({"opacity": "0", "height": '100%', "width": "100%", 'top': '0', 'left': '0'});
      });
  }
})

// Function to open up a layer with iframe media to play content, also creates close button

jQuery(function() {
  if (jQuery(window).width() > 600) {
    jQuery('.close-button').click(function(event){
      var obj = jQuery(this).parent().find('.media-content')
      displayCloseButton(this)
      obj.find('iframe').fadeToggle('slow')
      jQuery(obj).fadeToggle('slow', function (){
        if(obj.is(':hidden')){
          obj.html( obj.html() );
        }
      });
    });
  }
});

// Functions to create the new menu and alow it to slide to the relevant page

jQuery(function() {
  jQuery('.menu-item').bind('click',function(event){
    var splitText = this.innerText.split(' ');
    var hashAnchor = "#" + splitText
    var targetAnchor = jQuery(hashAnchor).offset().top
    jQuery('html, body').animate({scrollTop: (targetAnchor) }, 1500);
  });
  closeMobileHearOnLinkClick()
});

function removeHrefFromMenu(){
  jQuery('.menu-item').find("a[href='#']").removeAttr("href").css("cursor","pointer");
}


// Function to set height of articles to be the same as the article width 

function setClonedContentHeight(){
  var clonedContent = jQuery('#work .cloned-content')
  var widthString = clonedContent.css('width')
  var width = parseInt(widthString, 10)
  clonedContent.css({'height': ((width) + 'px')})
}

// when an article is clicked and expands, a CLOSE (x) button appears instead of being hidden

function displayCloseButton(button){
  var closeButton = jQuery(button)
  closeButton.toggleClass('show')
}

// Clones content from top of the 'first' page into the #work section, then it removes the original content

function cloneContent(){
  jQuery(".post").clone().removeAttr('class').attr('class', "cloned-content content-to-clone").appendTo('#work .section-content-wrapper .section-content');
  jQuery('#work article').removeClass('content-to-clone')
  jQuery('.content-to-clone').remove()
}

function fadeInContentOnScroll(content, top){
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
  jQuery(content).animate({'opacity':'1', 'margin-left': 0},2000); 
}

// creates parallax scrolling for the front page header

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

// removes nav expand button from desktop site, allows it for mobile

function removeNavExpandButton(){
  jQuery('.container').remove()
}

// build the mobile header

function createMobileHeader(){
  jQuery(function() {
    jQuery('.container').bind('click',function(event){
      jQuery('.container').toggleClass("change");
      var button = jQuery('.container')
      if (button.attr('aria-expanded') === 'false') {
        jQuery(this).attr( 'aria-expanded', 'true');
        jQuery('#primary-menu').slideDown("slow");
      } else {
        jQuery(this).attr( 'aria-expanded', 'false');
        jQuery('#primary-menu').slideUp("slow");
      }  
    });
  });



  jQuery(function() {
    jQuery('.menu-item').bind('click',function(event){
      jQuery('.container').toggleClass("change");
      jQuery('.container').attr( 'aria-expanded', 'false');
      jQuery('#primary-menu').slideUp("slow");
    });
  });

}


function closeMobileHearOnLinkClick(){
  jQuery(function() {
    if (button.attr('aria-expanded') === 'true') {
      jQuery(this).attr( 'aria-expanded', 'false');
      jQuery('#primary-menu').slideDown("slow");
    } 
  });
}
























