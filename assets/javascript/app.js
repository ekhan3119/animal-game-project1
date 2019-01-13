<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    // Event listener for Giphy button

    $("#placeholderID").on("click"), function() {

    // storing giphy API URL for a bluejay giphy

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=ADDBLUEJAYLOOKUP";

    // AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
      })

  }
    


