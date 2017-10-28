var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Route for displaying all burgers in database
// will do the logic of devored OR not in the view
router.get("/", function(req, res) {
  console.log("get route works");

  burger.all(function(data){
    var burgerObj = {
      burgers: data
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});


router.post("/api/burgers", function(req, res) {

  burger.insertOne (["burger_name"],[req.body.burger_name], function(result){
    res.json({id: result.insertId}
      );
  });
});

router.put("/", function(req, res) {
  console.log("get route works");
  // will need to update with views
  res.send("<h1>works</h1>");
})

module.exports = router;