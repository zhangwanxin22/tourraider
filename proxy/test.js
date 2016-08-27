var model = require('../models');
var Test = model.Test;

exports.getAll = function( cb){
  Test.find(cb)
}

exports.add = function(text){
  var test = new Test();
  test.text = text;

  console.log(test)
  test.save();
}

