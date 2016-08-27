var Test = require('../proxy').Test;
var config = require('../config');
var mail = require('../common/mail');

exports.test = function(req, res, next){
  Test.getAll(function(err, test){
    res.send(test)
  })
}


exports.sendmail = function(req, res){
  var mailStr = req.body.mail
  mail.sendDefaultMail(mailStr);

  setTimeout(function(){
    Test.add(mailStr)
    res.send(200)
  },200)
}