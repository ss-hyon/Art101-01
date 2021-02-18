/**
 * Author:    Selena Hyon
 * Created:   02.17.2021
 *
 * Public Domain
 **/

$(".output").append("<button class= button>");
$(".button").html("click here");

//Task 3 Adding event listners
//$('element').toggleClass('class_name');
$(".button").click(function(){
  $("#challenges").toggleClass("special");
  $("#problems").toggleClass("special");
  $("#results").toggleClass("special");
});
