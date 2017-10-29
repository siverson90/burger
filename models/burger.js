var orm = require("../config/orm.js");

// methods in burger will call the functions in the orm js that will be the functions to interact with the datatbase
var burger = {

  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },

  insertOne: function(column,value,cb) {
    orm.insertOne("burgers",column,value,function(res){
      cb(res);
    });
  },

  updateOne: function(column,value,cb) {
    console.log(column);
    console.log(value);
    console.log(cb);
    
    orm.updateOne("burgers", column, value, function(res){
      cb(res);
    });
  } 

}

module.exports = burger;