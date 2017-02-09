$("#web-title, #web-address").on("keyup", disableEnter);

$('#enter-button').on('click',function() {
  var $webTitle = $('#web-title').val();
  var $webAddress = $('#web-address').val();
  $webAddress = $webAddress.includes("http://") ? $webAddress :  $webAddress.includes("www") ? "http://" + $webAddress : "http://" + "www." + $webAddress;
  $('#display-side').prepend("<div class='bookmarks'><h2>" + $webTitle + "</h2><hr><a class='link' target='_blank' href='" + $webAddress + "'>" + $webAddress + "</a><hr><button class='read'>Read</button><button class='delete'>Delete</button></div>");
  $('#web-title').val('');
  $('#web-address').val('');
  bookmarkCount();
  disableEnter();
  disableClearBookmarks();

});

$('#display-side').on('click','.read', function(event) {
  $(this).closest('.bookmarks').toggleClass('read-bookmark');
  $(this).closest('.link').toggleClass('read-link');
  $(this).toggleClass('read-button');

});
$('#display-side').on('click','.delete', function(event) {
  $(this).closest('.bookmarks').remove();
  bookmarkCount();
  disableClearBookmarks();
});
$('#clear-button').on('click', function(event) {
  $('.bookmarks').remove();
  disableEnter();
  bookmarkCount();
});

function disableEnter(){
  if($("#web-title").val().length > 0 && $("#web-address").val().length > 0) {
    $("#enter-button").prop("disabled", false);
  } else {
    $("#enter-button").prop("disabled", true);
  }
}

function disableClearBookmarks() {
  if ($('.bookmarks').length < 1) {
    $("#clear-button").prop("disabled", true);
  }
  else {
    $("#clear-button").prop("disabled", false);
  }
}

function bookmarkCount() {
var $bookmarkCount = $('.bookmarks');
$('#bookmark-count').text($bookmarkCount.length);
}
