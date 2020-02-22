// Main JS file.


// 


$(document).ready(function(){
   $('.datepicker').datepicker();
 });

// 



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
  });


  // Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE'
  });
}


// Upload Img 

function fileChange(e) {  

  document.getElementById('inp_img').value = ''; 

  for (var i = 0; i < e.target.files.length; i++) {  

     var file = e.target.files[i];

     if (file.type == "image/jpeg" || file.type == "image/png") {

        var reader = new FileReader();  
        reader.onload = function(readerEvent) {

           var image = new Image();
           image.onload = function(imageEvent) { 

              var max_size = 300;
              var w = image.width;
              var h = image.height;
                
              if (w > h) {  if (w > max_size) { h*=max_size/w; w=max_size; }
              } else     {  if (h > max_size) { w*=max_size/h; h=max_size; } }
            
              var canvas = document.createElement('canvas');
              canvas.width = w;
              canvas.height = h;
              canvas.getContext('2d').drawImage(image, 0, 0, w, h);
              if (file.type == "image/jpeg") {
                 var dataURL = canvas.toDataURL("image/jpeg", 1.0);
              } else {
                 var dataURL = canvas.toDataURL("image/png");    
              }
              document.getElementById('inp_img').value += dataURL + '|';
           }
           image.src = readerEvent.target.result;
        }
        reader.readAsDataURL(file);
     } else {
        document.getElementById('inp_files').value = ''; 
        alert('Please only select images in JPG- or PNG-format.');   
        return false;
     }
  }

}

document.getElementById('inp_files').addEventListener('change', fileChange, false);   



// Ajax


var name = $('#add').attr("data_id");

var url = "https/url";

var img_nameimg_name="img.png"

$.ajax({
   type : "GET",
   cache : false,
   url : "welcome.php",
   data : { 
      url : 'url', 
      img_name : 'img_name' 
   }, 
   success: function ( html ) {
      $('#add').val('data sent sent');
   }
});


//  Date Piker

document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.datepicker');
   var instances = M.Datepicker.init(elems, options);
 });

 // Or with jQuery

 $(document).ready(function(){
   $('.datepicker').datepicker();
 });

//  Pikers

var currYear = (new Date()).getFullYear();

$('#minMaxExample').datepicker({
   language: 'en',
     range : true,
     multipleDates: true
})

