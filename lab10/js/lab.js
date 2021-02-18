/**
 * Author:    Selena
 * Created:   02.11.2021
 *
 * Public Domain
 **/

 // lab 7: Sorted function
    function sorted(userName) {
    //changing strings to array
      var userArray = userName.split("");
      console.log(userArray)
    //sorting array
      var sortArray = userArray.sort();
      console.log(sortArray)
    //chaninging arrays to strings
      var sortedName = sortArray.join("");
      console.log(sortedName)
      return sortedName;
    }

  // find the element
     var button = document.getElementById('my-button');
     button.addEventListener("click", function() {
         console.log("Submitted");
  // finding the value of the element
         var userName = document.getElementById('user-name').value;
 // declaring the sorted name
         var sortedName = sorted(userName);
 // get the element output div
         var outputArea = document.getElementById('output');
 // put new value in output
         outputArea.innerText = sortedName;})
