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

  $(".eat-burger").on("click", function(event){
    

    var burgerName = $(this).data("burger");
    var id = $(this).data("id");
    var eatenState = true;


    eatBurger = {
      burger_name: burgerName,
      id: id,
      devoured: eatenState

    }

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatBurger
    }).then(function(){
      console.log("Burger has been eaten");
      location.reload();
    })
  });
});