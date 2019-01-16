
$(document).ready(function() {
$(".gif").on("click", function() {

    var state = $(".gif").attr("data-state");
    
    if (state === "still") {
      $(".gif").attr("src", $(".gif").attr("data-animate"));
      $(".gif").attr("data-state", "animate");
    } else {
      $(".gif").attr("src", $(".gif").attr("data-still"));
      $(".gif").attr("data-state", "still");
    }
  });

})
//var rooster = $("rooster-soundclip");

var audioElement = document.createElement("audio");


$(".sound").on("click", function() {
  audioElement.src= $(this).attr("data-sounds");

  audioElement.play();
  console.log("I am working");
});
