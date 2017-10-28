var orm = require("../config/orm.js");

// methods in burger will call the functions in the orm js that will be the functions to interact with the datatbase
var burger = {

  all: function(cb) {
    orm.selectAll(function(res){
      cb(res);
    });
  }
}

module.exports = burger;