var config = require('../config');
var User = require('../proxy').User;
var ep = require('eventproxy');

exports.login = function(req, res, next){
  var userId = req.body.userId;
  var password = req.body.password;

  var getUser;

  if(userId.indexOf('@') != -1){
    getUser = User.getUserByEmail;
  }
  else{
    getUser = User.getUserByName;
  }

  getUser(userId, function(err, user){
    console.log(userId, user)
    if(!user){
      res.send({rt:0, err: '用户名或密码错误'})
    }

    if(user.password === password){
      res.send({rt:1, msg:'登录成功'});
    }
    else{
      res.send({rt:0, err: '用户名或密码错误'});
    }
  })
}

exports.reg = function(req, res, next){
  var loginname = req.body.loginname;
  var password = req.body.password;
  var repassword = req.body.repassword;
  var email = req.body.email;

  if(password != repassword){
    res.send({rt:0, msg:'两次密码不相同'})
  }

  User.getUserByQuery({'$or':[
    {loginname: loginname},
    {email: email}
  ]},{}, function(err, users){
    if(err){
      res.send(500);
    }

    if(users.length > 0){
      return res.send({rt:0, err: '用户名或邮箱已被注册'});
    }

    User.addUser(loginname, password, email, true, function(err){
      if(err){
        return res.send({rt:0, err: '注册失败'});
      }

      res.send({rt:1, msg:'注册成功'});

    })
  })
}