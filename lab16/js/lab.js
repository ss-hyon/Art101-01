/**
 * Author:    Selena Hyon
 * Created:  Spring 2021
 *
 * Public Domain
 **/
// Using the core $.ajax() method
var apiEndpoint = "http://xkcd.com/info.0.json"

function putTextOnPage(text) {
  $("#output").html(text);
}

function apiEnd(){
  console.log("api End");
$.ajax({
    // The URL for the request (from the api docs)
    url: apiEndpoint,
    // The data to send (will be converted to a query string)
    data: { },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function( data ) {
      //turn data object into display string
      var text = JSON.stringify(data);
      //build up a string
      var str = "";
      //get individual values from data object
      var imageURL = data.img;
      console.log(imageURL);
      var title = data.title;
      var alt = data.alt;

      //building the string using html
      str +="<h2>" + title + "</h2>";
      str += "<img src='" + imageURL + "'>";
      console.log(str);
        //put html string on page
        putTextOnPage(str);
        console.log("Sucess:");
    },
    // What we do if the api call fails
    error: function(xhr , status, errorThrown){
      console.log("fail");
      $("#output").html(errorThrown + "status:" + status );
    }
  })
}
$("#apiButton").click(apiEnd);
