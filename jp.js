$('#enter-button').on('click',function() {
  submitData();
});

function submitData() {

  var $webTitle = $('#web-title').val();
  var $webAddress = $('#web-address').val();

  $webAddress = $webAddress.includes("http://") ? $webAddress :  $webAddress.includes("www") ? "http://" + $webAddress : "http://" + "www." + $webAddress;

  $('#display-side').prepend("<div class='bookmarks'><h2>" + $webTitle + "</h2><hr><a target='_blank' href='" + $webAddress + "'>" + $webAddress + "</a><hr><button class='read'>Read</button><button class='delete'>Delete</button></div>");

  $('#web-title').val('');
  $('#web-address').val('');

}
