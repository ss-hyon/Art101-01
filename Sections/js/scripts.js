console.log("javascript loaded");
var nameVar= "Selena"
var numvar=5;
console.log(numVar);
numVar= 25;
console.log(numVar);
//named function with no parameters
function myfirstFunction (){
  console.log("this is my first function");
}
myfirstFunction();
//named functions with parameters
function comparingNumbers(firstNum, secondNum){
  console.log("first Number:+"firstNum"+second Number:"+secondNum);
  console.log("First Number is greater than second Number"+(firstNum>secondNum));
  console.log(numVar);
  firstNum= 11;
  secondNum= 12;
  console.log("first Number:+"firstNum"+second Number:"+secondNum);
  console.log("first Number is greater than second number"+(firstNum>secondNum));
  numVar=numVar+3;
}
comparingNumbers(2,1);
numVar= numVar+ 40;//68
comparingNumbers(12,18);
console.log(numVar);
//console.log(firstNum);

// username Info
function userInfo (first, last) {
  var result;
  result = "my first name is" + first + "my last name is" + last;
  return result;
}
var returned = userInfo("Selena", "Hyon");
console.log(returned);
