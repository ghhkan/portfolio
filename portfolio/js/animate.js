$(document).ready(function(){

  $(".menu").click(function() {
    $(".flip-card-inner").css("transform", "rotateY(180deg)");
    $(".flip-card-back").css("transform", "rotateY(180deg)");
    $(".m2").css("transform", "rotateY(180deg)");
    $(".close").css("transform", "rotateY(180deg)");

    });

$(".close").click(function() {
  $(".flip-card-inner").css("transform", "rotateY(-90deg)");
  $(".flip-card-front").css("transform", "rotateY(90deg)");


  });

$("#contact-btn").click(function() {
      $('html,body').animate({
          scrollTop: $("#contact").offset().top},
          'slow');
  });

});
