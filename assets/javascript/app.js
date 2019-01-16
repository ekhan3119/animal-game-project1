
$(document).ready(function() {
$(".bluejaygiphy").on("click", function() {

    var state = $(".bluejaygiphy").attr("data-state");
    
    if (state === "still") {
      $(".bluejaygiphy").attr("src", $(".bluejaygiphy").attr("data-animate"));
      $(".bluejaygiphy").attr("data-state", "animate");
    } else {
      $(".bluejaygiphy").attr("src", $(".bluejaygiphy").attr("data-still"));
      $(".bluejaygiphy").attr("data-state", "still");
    }
  });
})


