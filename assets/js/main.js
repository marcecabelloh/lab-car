//función jquery permite que navbar cambie a color negro cuando se desplaza
//y se transparenta cuando llega a su posición original 

$(document).ready(function(){      
   var scroll_start = 0;
   var startchange = $('#navbar');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background-color', '#000000');
       }  else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
    }
});


