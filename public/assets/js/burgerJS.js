

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  $(".devouredClass").on("click", "#devour", function(event) {
    var id = $(this).data("id");


    var eatState = {
      id: id,
      devoured: true
    };

    console.log (eatState.id);

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: eatState
    }).then(
      function() {
        console.log("chaged devoured state", eatState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#createBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
