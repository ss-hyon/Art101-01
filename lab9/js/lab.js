/**
 * Author: Selena Hyon
 * Created:  Spring 2021
 *
 * License: Public Domain
 **/
//task 2
 var outputEl = document.getElementById("output");
 var new1El = document.createElement("p");
 outputEl.appendChild(new1El);
new1El.innerHTML = "Test1: I was created in JavaScript."

var output2El = document.getElementById("output")
var new2El = document.createElement("p");
  output2El.appendChild(new2El);
new2El.innerHTML = "Test2: ME TOO!"

//css style
document.getElementById("output").style.border = "thick solid";
document.getElementById("output").style.borderColor = "#B51A3A";
document.getElementById("output").style.marginLeft = "30px";
document.getElementById("output").style.position = "fixed";
