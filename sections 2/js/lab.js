// var original_text = $("#original_text").html();
//
// function matchingFunction(){
//   var input_text = $("#input_text").val();
//   var substring_var = original_text.substring(0,input_text.length);
//   console.log(substring_var);
//   if(input_text == origninal_text){
//     //color blue
//     $("#input_text").css('border-color','blue');
//   } else if (input_text == substring_var){
//     //color red
//     $("#input_text").css('border-color','red');
//   }
//   else{
//     //color red
//     $("#input_text").css('border-color','red');
//   }
// }
// $("#input_text").keyup(matchingFunction)
//
// //keyup: changing the speed of the text to input
// //Keypress: ex. Backspace buttons
function getajaxdata(){
$.ajax({
  url:"../css/ajax.txt",
  type: "GET",
  datatype:"text",
  success: sucessFun,
  error: errorFun,
  complete: function(xhr,status){
    console.log("the request have been done");

  }
})
function sucessFun(result){
  console.log(result)
  $('#ajax_text').html(result);
}
function errorFun(xhr,status,strErr){
  console.log("error"+strErr);
}
$('#input_text').click(getajaxdata);
