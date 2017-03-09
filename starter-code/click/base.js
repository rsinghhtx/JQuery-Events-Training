console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('span').on('click',function(){
    $('ul').append('<li></li>').append($(this).text)

  })

})


//on click
// append item to list
