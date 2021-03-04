/**
 * Author:    Selena Hyon
 * Created:  Spring 2021
 *
 * Public Domain
 **/
 $("#activate").click(apiOutput);
  function apiOutput(){
     // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://www.boredapi.com/api/activity",
        // The data to send (will be converted to a query string)
        data: { },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
  })
      .done(function( data ) {
        console.log("goal");
        console.log(data.activity);
        $("#output").html(data.activity);
      })
    //If the request fails
    .fail(function(xhr , status, errorThrown){
      console.log("fail");
      $("#output").html(errorThrown + "status:" + status );
    });
  }
