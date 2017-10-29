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

router.put("/api/burgers/:id", function(req, res) {
  console.log("put route works");
  var burgerName =req.body.burger_name;
  var id = req.params.id;
  var eatenState = req.body.devoured

var condition = "id = " + req.params.id;

  burger.updateOne (
    {devoured: eatenState},condition, function(result) {
      if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;