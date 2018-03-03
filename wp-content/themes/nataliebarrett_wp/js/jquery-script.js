jQuery( document ).ready(function() {
  console.log("jQuery works")

cloneContent()

})

function cloneContent(){
  jQuery(".hidden-posts-to-clone").clone().removeAttr('class').attr('class', ".cloned_content").appendTo('#work')
}

