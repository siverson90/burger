var connection = require("../config/connection.js");

function generateQuestionMarks(values){
  console.log(values);

  var newArray= [];

  for( var i = 0; i < values; i++) {
    newArray.push("?");
  }

  return newArray.toString();
}

function objectToSql(obj){
  var arr = [];

  for (var key in obj) {
    var value = obj[key];

    if (Object.hasOwnProperty.call(obj,key)) {
      if(typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + " = " + value);
    }
  }
  return arr.toString();
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
  
  updateOne: function(tableName, column, value, cb) {
    console.log("t "+ tableName);
    console.log("c "+ column);
    console.log("v "+ value);
    console.log("cb "+cb);

    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;

    var queryString = "UPDATE " + tableName;
    queryString += " SET";
    queryString += " "+ objectToSql(column);
    queryString += " WHERE ";
    queryString += value;

    console.log(queryString);

    connection.query(queryString,value, function(err,result){
      if (err) {
        throw err;
      } else {
        cb(result);
      }
    });
  }
}

module.exports = orm;