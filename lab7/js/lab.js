/**
 * Author: Selena Hyon
 * Created:  Spring 2021
 *
 * License: Public Domain
 **/
// //entering name
function myFunction() {
  var userName = window.prompt("Please enter your name");
  document.writeln(userName + "</br>");
//changing strings to array
  var userArray = userName.split("");
  console.log(userArray)
//sorting array
  var sortArray = userArray.sort();
  console.log(sortArray)
//chaninging arrays to strings
  var sortedName = sortArray.join("");
  console.log(sortedName)
  return sortedName
}
////simplified version
//https://medium.com/@endubueze00/javascript-algorithm-alphabet-soup-91f5dea79e51
// function myFunction(str) {
//   let userName = window.prompt("enter name");
//   document.writeln(userName + "</br>");
//   let sortedStr = userName.toLowerCase().split("").sort().join("");
//   return sortedStr;
// }
// function shuffelWord (word){
//     var shuffledWord = sortedStr;
//     word = word.split(sortedStr);
//     while (word.length > 0) {
//       shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
//     }
//     return shuffledWord;
// }
//Function Output
document.writeln("are the letters in your name alphabetized: " + myFunction());
