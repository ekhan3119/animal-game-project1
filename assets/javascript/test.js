$(document).ready(function () {
  $(".gif").on("click", function () {

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


$(".sound").on("click", function () {
  audioElement.src = $(this).attr("data-sounds");

  audioElement.play();
  console.log("I am working");
});

  

$("#done").on("click", function showGif() {

  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=12X5g58jj9Myz9YLGYD6c8T5IIr7Qc2V&tag=congratulations&rating=g&limit=1";
  console.log(queryURL);
  $("congrats-gif").empty();
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  // After the data from the AJAX request comes back
    .then(function(response) {

    // Saving the image_original_url property
      var imageUrl = response.data.image_original_url;

      // Creating and storing an image tag
      var congratulation = $("<img>");

      // Setting the catImage src attribute to imageUrl
      congratulation.attr("src", imageUrl);
      congratulation.attr("alt", "congrats");

      // Prepending the catImage to the images div
      $(".congrats-gif").prepend(congratulation);
     
    });

    <!-- Initialize Bootstrap functionality -->

// Initialize tooltip component

  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  
  // Initialize popover component
  $(function () {
    $('[data-toggle="popover"]').popover()
  });

  
