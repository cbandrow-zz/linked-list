// Javascript Functionality

//1. We have 2 input
//  Connect each input to the the Enter button
//  Use jQuery to connect input to button and button to bookmark fields
//2. Click Read button
//.  use jquery toggleClass to toggle .read
//.
//3.
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
  var noWww = webAddress.includes("www");;
  var noHttp = webAddress.includes("http://");
  console.log(noWww, noHttp);

  if (noWww === false && noHttp === false){
    var address = "http://" + "www." + webAddress;
  } else if (noWww === true && noHttp === true){
    var address = webAddress;
  } else if (noWww === false){
    var address = "www." + webAddress;
    var address = webAddress.replace("http://", "http://www.")
  } else if (noHttp === false){
    var address = "http://" + webAddress;
  }
  console.log(webTitle + webAddress);

  //Then append with div + data
  $('#display-side').append("<div class='bookmarks'><h2>" + webTitle + "</h2><hr><a href='"+ address +"'>" + address + "</a><hr><button class='read'>Read</button><button class='delete'>Delete</button></div>");
}

function evalAddress() {
  if (noWww === false && noHttp === false){
    var address = "http://" + "www." + webAddress;
  } else if (noWww === true && noHttp === true){
    var address = webAddress;
  } else if (noWww === false){
    var address = "www." + webAddress;
    var address = webAddress.replace("http://", "http://www.")
  } else if (noHttp === false){
    var address = "http://" + webAddress;
  }
}

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
