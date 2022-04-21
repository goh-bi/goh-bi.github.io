


$(document).ready(function(){
    $("#icone").on("click",function(){
        $(this).toggleClass('fa-xmark');
        $('header').toggleClass('toggle'); 
    });
  });