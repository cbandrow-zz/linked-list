function bookmarkCount() {
var $bookmarkCount = $('.bookmarks');
console.log($bookmarkCount.length);
$('#bookmark-count').text($bookmarkCount.length);
}

$('#enter-button').on('click',function() {
  var $webTitle = $('#web-title').val();
  var $webAddress = $('#web-address').val();

  $webAddress = $webAddress.includes("http://") ? $webAddress :  $webAddress.includes("www") ? "http://" + $webAddress : "http://" + "www." + $webAddress;

  console.log(isUrlValid($webAddress));

  $('#display-side').prepend("<div class='bookmarks'><h2>" + $webTitle + "</h2><hr><a class='link' target='_blank' href='" + $webAddress + "'>" + $webAddress + "</a><hr><button class='read'>Read</button><button class='delete'>Delete</button></div>");

  bookmarkCount();

  $('#web-title').val('');
  $('#web-address').val('');
});

$('#display-side').on('click','.read', function(event) {
  console.log("Holy shit reading is fun");
  console.log(event.target);
  $(this).closest('.bookmarks').toggleClass('read-bookmark');
  $(this).closest('.link').toggleClass('read-link');
  $(this).toggleClass('read-button');



});

$('#display-side').on('click','.delete', function(event) {
  console.log("Dum diddy dum diddy delete");
  $(this).closest('.bookmarks').remove();
  bookmarkCount();
});

$('#clear-button').on('click', function(event) {
  console.log("CLEAR!!!");
  $('.bookmarks').remove();
  bookmarkCount();
});

function isUrlValid(url) {
    return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
}
