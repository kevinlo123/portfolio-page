/************************************************************
*****************progress bars *******************************/

$(document).ready(function(){
  $('.bar-inner').animate({width:'70%'},7500);
  $('.bar-inner2').animate({width:'70%'},7500);
  $('.bar-inner3').animate({width:'50%'},7500);
  $('.bar-inner4').animate({width:'65%'},7500);
});

/***********************************************************
***************** main navbar fade in and out**************/

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 20) {
    $('nav').fadeOut();
  }
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y < 10) {
    $('nav').fadeIn();
  }
});

/***************************************************************
*******************2nd navbar***********************************/

$(document).ready(function(){
      $(window).scroll(function(){
          if ($(this).scrollTop() > 200) {
              $('#nav2').fadeIn(200);
          } else {
              $('#nav2').fadeOut(200);
          }
      });
  });
/***************************************************************
************************window scroll animation****************/

$("#scrollAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1250);
});

$("#scrollPortfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1250);
});

$("#scrollContact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1250);
});

$(".homeButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1250);
});

/****************************************************
*****************2nd navbar window scrollto**********/

$("#nav2_listItemsAnch1").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1250);
});

$("#nav2_listItemsAnch2").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1250);
});

$("#nav2_listItemsAnch3").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1250);
});

$("#nav2_listItemsAnch4").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1250);
});

/**************************************************
media query jquery*********************************/


$(document).ready(function() {
     $(".hamburger").click(function () {
     $("nav ul").slideToggle(300)
  });
  });

   $(".hamburger").on("click", function(){
     $(this).toggleClass("classToggled");
 });
