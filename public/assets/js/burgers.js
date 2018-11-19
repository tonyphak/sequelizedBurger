$(function () {

    $(".change-devour").on("click", function(event){
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        })
            .then(function(){
                console.log("changed devoured to", newDevour);

                location.reload();
            })
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0

        };

        $.ajax("/api/burgers", {
                type: 'POST',
                data: newBurger
            })
            .then(function() {
                    console.log("new burger created");

                    location.reload();
                }
            )
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