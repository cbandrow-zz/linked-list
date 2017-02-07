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


// ---Creates a DIV and adds data-----//
$('#enter-button').on('click', function (event) {
  console.log(event.target.id);
  submitData();
});

function submitData (){

  //Get Data First
  var webTitle = $('#web-title').val();
  var webAddress = $('#web-address').val();
  console.log(webTitle + webAddress);

  //Then append with div + data
  $('#display-side').prepend("<div class='bookmarks'><h2>" + webTitle + "</h2><hr><a href='http://"+ webAddress +"'>" + webAddress + "</a><hr><button class='read'>Read</button><button class='delete'>Delete</button></div>");
}


// $('#enter-button').on('click', function () {
//   var num = 0;
//   var pressCounter;
//   var newEntry;
//   num += 1;
//   pressCounter = num.toString();
//   newEntry = "count" + pressCounter;
//   console.log(newEntry);
//   var webTitle = $('#web-title').val();
//   var webAddress = $('#web-address').val();
//   $('#display-side').append("<div class ='bookmarks' id =" + newEntry +"></div>");
//   $('#'+ newEntry).append("<h2>" + webTitle + "</h2>");
//   $('#'+ newEntry).append("<hr>");
//   $('#'+ newEntry).append("<a>" + webAddress + "</a>");
//   $('#'+ newEntry).append("<hr>");
//   $('#'+ newEntry).append("<button class='read'>Read</button>");
//   $('#'+ newEntry).append("<button class='delete'>Delete</button>");
//   console.log(webTitle);
// });
