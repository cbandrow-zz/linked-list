$('#enter-button').on('click',function() {
  var $webTitle = $('#web-title').val();
  var $webAddress = $('#web-address').val();

  $webAddress = $webAddress.includes("http://") ? $webAddress :  $webAddress.includes("www") ? "http://" + $webAddress : "http://" + "www." + $webAddress;

  $('#display-side').prepend("<div class='bookmarks'><h2>" + $webTitle + "</h2><hr><a class='link' target='_blank' href='" + $webAddress + "'>" + $webAddress + "</a><hr><button class='read'>Read</button><button class='delete'>Delete</button></div>");

  $('#web-title').val('');
  $('#web-address').val('');
});

$('#display-side').on('click','.read', function(event) {
  console.log("Holy shit reading is fun");
  console.log(event.target);
  $('.read').toggleClass('read-button');
  $('.bookmarks').toggleClass('read-bookmark');
  $('.link').toggleClass('read-link');


  var $readButtonCount = $('.read');
  console.log($readButtonCount);

});

$('#display-side').on('click','.delete', function() {
  console.log("Dum diddy dum diddy delete");
});
