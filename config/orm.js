var connection = require("../config/connection.js");

function generateQuestionMarks(values){
  console.log(values);

  var newArray= [];

  for( var i = 0; i < values; i++) {
    newArray.push("?");
  }

  return newArray.toString();
}

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
  insertOne: function(tableName, column, value, cb) { 
    console.log("t "+ tableName);
    console.log("c "+ column);
    console.log("v "+ value);
    console.log("cb "+cb);

    var queryString = "INSERT INTO "+ tableName;

    queryString += " (";
    queryString += column.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += generateQuestionMarks(value.length);
    queryString += ") ";
    
    console.log(queryString);

    connection.query(queryString, value, function(err,result){
      if (err) {
        throw err;
      }
      else {
        cb(result);
      }
    });
  },
  updateOne: function(){},
}

module.exports = orm;