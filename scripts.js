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


//Code for Read buttons
$('#read-button-1').on('click', function () {
  $('#read-button-1').parent().toggleClass('read-bookmark');
  $('#a-1').toggleClass('read-link');
  $('#read-button-1').toggleClass('read-button');
});

$('#read-button-2').on('click', function () {
  $('#read-button-2').parent().toggleClass('read-bookmark');
  $('#a-2').toggleClass('read-link');
  $('#read-button-2').toggleClass('read-button');
});

$('#read-button-3').on('click', function () {
  $('#read-button-3').parent().toggleClass('read-bookmark');
  $('#a-3').toggleClass('read-link');
  $('#read-button-3').toggleClass('read-button');
});

$('#read-button-4').on('click', function () {
  $('#read-button-4').parent().toggleClass('read-bookmark');
  $('#a-4').toggleClass('read-link');
  $('#read-button-4').toggleClass('read-button');
});
