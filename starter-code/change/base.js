console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('.ADD').on('click',function(){
    // $('.symbol').text() === "Go!" )
    var left = parseInt($('#left').val());
    var right = parseInt($('#right').val());
    var total = left + right;
  $('#total').val(total);
  });

  $('.SUBTRACT').on('click',function(){
    var left = parseInt($('#left').val());
    var right = parseInt($('#right').val());
    var total = left - right;
  $('#total').val(total);
  });

  $('.MULTIPLY').on('click',function(){
    var left = parseInt($('#left').val());
    var right = parseInt($('#right').val());
    var total = left * right;
  $('#total').val(total);
  });

  $('.DIVIDE').on('click',function(){
    var left = parseInt($('#left').val());
    var right = parseInt($('#right').val());
    var total = left / right;
  $('#total').val(total);
  });


})
