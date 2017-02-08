$("#web-title, #web-address").on("keyup", disable);

$('#enter-button').on('click',function() {
  var $webTitle = $('#web-title').val();
  var $webAddress = $('#web-address').val();

  if ($webTitle ==="" || $webAddress===""){
    $('#non-entry').text("Try entering a valid site and URL");
  } else {
    addData($webAddress, $webTitle);
  }

  $('#web-title').val('');
  $('#web-address').val('');
  disable();
});

function addData($webAddress, $webTitle){
  $webAddress = $webAddress.includes("http://") ? $webAddress :  $webAddress.includes("www") ? "http://" + $webAddress : "http://" + "www." + $webAddress;

  $('#display-side').prepend("<div class='bookmarks'><h2>" + $webTitle + "</h2><hr><a class='link' target='_blank' href='" + $webAddress + "'>" + $webAddress + "</a><hr><button class='read'>Read</button><button class='delete'>Delete</button></div>");

  $('#non-entry').text("");

}

function disable(){
  if($("#web-title").val().length > 0 && $("#web-address").val().length > 0) {
    $("#enter-button").prop("disabled", false);
  } else {
    $("#enter-button").prop("disabled", true);
  }
}

$('#display-side').on('click','.read', function(event) {

  $(this).closest('.bookmarks').toggleClass('read-bookmark');
  $(this).closest('.link').toggleClass('read-link');
  $(this).toggleClass('read-button');

  var $readButtonCount = $('.read');
  console.log($readButtonCount);

});

$('#display-side').on('click','.delete', function() {

});
