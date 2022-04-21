


$(document).ready(function(){
    $("#icone").on("click",function(){
        $(this).toggleClass('fa-xmark');
        $('header').toggleClass('toggle'); 
    });

    $(window).on("scroll load",function(){
        $('#icone').removeClass('fa-xmark');
        $('header').removeClass('toggle'); 
    } )
  });
