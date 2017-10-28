var connection = require("../config/connection.js");

var orm = {
  // Need to only pass a callback function
  selectAll: function(cb){
    var queryString = "SELECT * FROM burgers"; 
    connection.query(queryString, function(err,result){
        if (err) {
          throw err; 
        }
        cb(result);
    })
  },
  insertOne: function(){},
  updateOne: function(){},
}

module.exports = orm;