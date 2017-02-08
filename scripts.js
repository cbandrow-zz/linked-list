
// $(document).ready(function(){
//var initVal = "";
//     $("#web-title, #web-address").blur(function(){
//         if ($(this).val() != initVal && $(this).val() != "") {
//             $("#enter-button").removeAttr("disabled");
//         } else {
//             $("#enter-button").attr("disabled", "true");
//         }
//     });
// });

if($("#web-title") === "" || $("#enter-button") === ""){
  $("#enter-button").attr("disabled", "true");
} else {
  $("#enter-button").removeAttr("disabled");
}


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
});

function addData($webAddress, $webTitle){
  $webAddress = $webAddress.includes("http://") ? $webAddress :  $webAddress.includes("www") ? "http://" + $webAddress : "http://" + "www." + $webAddress;

  $('#display-side').prepend("<div class='bookmarks'><h2>" + $webTitle + "</h2><hr><a class='link' target='_blank' href='" + $webAddress + "'>" + $webAddress + "</a><hr><button class='read'>Read</button><button class='delete'>Delete</button></div>");

  $('#non-entry').text("");

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
