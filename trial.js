
$('#enter-button').on('click', function (event) {
  console.log(event.target.id);
  submitData();
});

function submitData (){


  var webTitle = $('#web-title').val();
  var webAddress = $('#web-address').val();
  var noWww = webAddress.includes("www");
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

<<<<<<< HEAD
  //Then append with div + data
  $('#display-side').prepend("<div class='bookmarks'><h2>" + webTitle + "</h2><hr><a href='"+ address +"'>" + address + "</a><hr><button class='read'>Read</button><button class='delete'>Delete</button></div>");

// function evalAddress() {
//   if (noWww === false && noHttp === false){
//     var address = "http://" + "www." + webAddress;
//   } else if (noWww === true && noHttp === true){
//     var address = webAddress;
//   } else if (noWww === false){
//     var address = "www." + webAddress;
//     var address = webAddress.replace("http://", "http://www.")
//   } else if (noHttp === false){
//     var address = "http://" + webAddress;
//   }
// }


$('#read-button-1').on('click', function () {
  $('#read-button-1').parent().toggleClass('read-bookmark');
  $('#a-1').toggleClass('read-link');
  $('#read-button-1').toggleClass('read-button');
})
