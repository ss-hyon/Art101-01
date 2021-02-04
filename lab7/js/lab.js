/**
 * Author: Selena Hyon
 * Created:  Spring 2021
 *
 * License: Public Domain
 **/
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

document.writeln("are the letters in your name alphabetized: " + myFunction());
