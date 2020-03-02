
//function slideShow(caller){
//var interval = setInterval(function(){
//  changeSlide();
//},1000)
//
//}


var interval;
$("input[value|='Start Slideshow'").click(function(){
       if($(this).hasClass('test')){
          $(this).removeClass('test');
          $(this).css('background-color', 'red');
          $(this).attr('value', 'Stop Slideshow')
          interval = setInterval(function(){

             var currentImg = $('.active');
             var nextImg = currentImg.next();

                if(nextImg.length){
                  nextImg.addClass('active');
                  currentImg.removeClass('active');
                } else {
                  $('.slider img').first().addClass('active');
                  currentImg.removeClass('active');
                }

         },1000)
       }else {
         clearInterval(interval);
         $(this).addClass('test');
         $(this).attr('value', 'Start Slideshow');
         $(this).css('background-color', 'white');

       }


})

//function changeMyImage(){
//
//
//  var interval = setInterval(function(){
//
//    var currentImg = $('.active');
//    var nextImg = currentImg.next();
//
//
//  if(nextImg.length){
//    nextImg.addClass('active');
//    currentImg.removeClass('active');
//  } else {
//    $('.slider img').first().addClass('active');
//    currentImg.removeClass('active');
//  }
//
//},1000); //setinterval
//
//}//changeMyImage
//
//$("input[value|='Start Slideshow'").click(function(){
//
//      if($(this).hasClass('test')){
//         changeMyImage();
//         $(this).removeClass('test');
//         console.log("Start")
//    } else {
//        clearInterval(changeMyImage());
//        $(this).addClass('test');
//        console.log("stop")
//    }
//  })




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


})



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


})
