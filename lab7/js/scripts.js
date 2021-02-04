console.log("javascript loaded");
var nameVar= "Selena"
var numvar=5;
console.log(numVar);
numVar= 25;
console.log(numVar);

function myfirstFunction (){
  console.log("this is my first function");
}
myfirstFunction();

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
