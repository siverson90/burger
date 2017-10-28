$(function() {

  $(".create-form").on("submit", function(event){
    event.preventDefault();
    console.log("button clicked");
    
    var newBurger = {
      burger_name: $("#burger-id").val().trim(),
      devoured: false,
    };

    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("New Burger added");

      location.reload();
      }
    );
  });
});