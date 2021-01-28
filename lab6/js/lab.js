/**
 * Author: Selena Hyon
 * Created:  Spring 2021
 *
 * License: Public Domain
 **/

 //Defining Variables
var myTransport=["car", "scooter", "bus", "legs"];
var myMainRide= {make:"Acura",
color:"black",
model: "ILX",
year:2016,
age: function(){return 2021- "year";}};

 ///Output
console.log(myTransport);
document.writeln("Getting around: " + myTransport + "<br>");
console.log(myMainRide);
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
