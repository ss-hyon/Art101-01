/**
 * Author: Selena Hyon
 * Created:  Spring 2021
 *
 * License: Public Domain
 **/
//created Functions

//Creating functions
function firstThing(test) {
console.log(test + ":is this working");
}
function secondThing(test){
  console.log(test + ":This is the second trial");
}
function thirdThing(test){
  console.log(test + ":final thing.")
}
//Function output
let t1 = "TEST 1"
firstThing(t1);
secondThing(t1);
thirdThing(t1);

//TEST 2 (timed out)
let t2= "TEST 2"
setTimeout(function (){
  firstThing(t2);
}, 0);
setTimeout(function (){
  secondThing(t2);
}, 0);
setTimeout(function (){
  thirdThing(t2);
}, 0);
//TEST 3 (counting timer set)
let t3 = "TEST 3"
setTimeout(function (){
  firstThing(t3);
}, 2000);
setTimeout(function (){
  secondThing(t3);
}, 3000);
setTimeout(function (){
  thirdThing(t3);
}, 1000);
