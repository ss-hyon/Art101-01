/**
 * Author:    Selena Hyon
 * Created:   02.17.2021
 *
 * Public Domain
 **/
//  ///same codes
// for (var index=0; index<10; index++){
//   //block of code
//   console.log(index);
// }
//
// var counter=0;
// while (counter<10){
//   //block of code
//   console.log(counter);
//   counter++;
// }

// //Lab 12 Task 2
function fizzBuzzBoom(){
  for ( var i=1; i <=200; i++){
    var str = "";
    if (i%3 == 0){
      str += "Fizz";

    } if (i%5 == 0){
      str += "Buzz";

    } if (i%7 == 0){
      str += "Boom";

    }
$("#output").append("<li>" + str + "</li>");
  }
}
fizzBuzzBoom();
