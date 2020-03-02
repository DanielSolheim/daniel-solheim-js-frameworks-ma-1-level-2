



// function for playing the slides automatically
var interval;
$("input[value|='Start Slideshow'").click(function(){
       //checking if the item has the class named "test"
       if($(this).hasClass('test')){

          //removing the class "test" and changing some values
          $(this).removeClass('test');
          $(this).css('background-color', 'red');
          $(this).attr('value', 'Stop Slideshow')

          // starting the changing image function
          interval = setInterval(function(){

             var currentImg = $('.active');
             var nextImg = currentImg.next();

                /* if there is more images add class "active" to the next one, and remove from this one
                   Display none, for the classes that does not contain the class active
                   If no more images, add class active to first image element
                */
                if(nextImg.length){
                  nextImg.addClass('active');
                  currentImg.removeClass('active');
                } else {
                  $('.slider img').first().addClass('active');
                  currentImg.removeClass('active');
                }

         },1000)

        /* if element does not have class "test", stop the interval from running and change some values, css rules */
       }else {
         clearInterval(interval);
         $(this).addClass('test');
         $(this).attr('value', 'Start Slideshow');
         $(this).css('background-color', 'white');

       }


})




// function for next button
$("input[value|='Next']").click( function(){
  var currentImg = $('.active');
  var nextImg = currentImg.next();


      if(nextImg.length){
        nextImg.addClass('active');
        currentImg.removeClass('active');
      } else {
        $('.slider img').first().addClass('active');
        currentImg.removeClass('active');
      }


});



//Function for previous button

$("input[value|='Previous']").click( function(){
  var currentImg = $('.active');
  var prevImg = currentImg.prev();


        if(prevImg.length){
          prevImg.addClass('active');
          currentImg.removeClass('active');
        } else {
          $('.slider img').last().addClass('active');
          currentImg.removeClass('active');
        }


});
