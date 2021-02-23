//given a number, return a Hogwart's house
//
function sortingHat(str){
    // get the remainder divided by 4 of the length
    var mod = length % 4;
    //create an if else to show house
    if (mod == 0){
      var str = "Gryffindor";
  }
    else if (mod == 1){
    var str = "Ravenclaw";
  }
  else if (mod == 2){
    var str = "Hufflepuff";
  }
  else if (mod == 3){
    var str = "Slytherin";
  }
return str;
}
//Attach click handler to submit button
$("#button").click(function(){
  //get the vaule in the input text box, assign to a variable name
  var name = $("#input").val();
  //get the length of the name
  var nameLength = name.length;
  //get house
  var house = sortingHat(nameLength);
  console.log(house);
  // add house to output div
  var output = "The Sorting Hat has sorted you into " + house + "!";
  console.log(output);
$("#output").html("<h1>"+ output + "</h1>");
});
