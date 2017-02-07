// Javascript Functionality

//1. We have 2 input
//  Connect each input to the the Enter button
//  Use jQuery to connect input to button and button to bookmark fields
//2. Click Read button
//.  use jquery toggleClass to toggle .read
//.
//3.

// if (bookmark field is full ){
//   then fill in next field
// }

//on click, create new div element with .HTML.
//within each element, append the div to store name and website

$('#enter-button').on('click', function () {
  var webTitle = $('#web-title').val();
  var webAddress = $('#web-address').val();
  $('#display-side').append()
  $('#title').text(webTitle);
  $('#address').text(webAddress);
  console.log(webTitle);
});
