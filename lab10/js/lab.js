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
  // finding the value of the element
         var userName = document.getElementById('user-name').value;
 // declaring the sorted name function
         var sortedName = sorted(userName);
 // output element
         var outputArea = document.getElementById('output');
         outputArea.innerText = sortedName;})
