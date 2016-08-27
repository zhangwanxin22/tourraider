
$('#J_send').on('click', function(){
  $.post('/testsendMail', { mail: $('#J_mail').val() });

  setTimeout(function(){
    $.get('/test', (data) => {
      for(var i=0; i<data.length; i++){
        $('p').append(`<span>${data[i].text}，</span>`)
      }
      $('p').append('<br>');
    })
  },200);
});

$('#J_login').on('click', function(){
  var userId = $('#lg_userId').val();
  var password = $('#lg_password').val();

  $.post('/login', {
    userId:userId,
    password:password
  }, function(data){
    if(data.rt){
      $('#login span').html(data.msg).css({color:'blue'});
    }
    else{
      $('#login span').html(data.err).css({color:'red'});
    }
  })
})

$('#J_reg').on('click', function(){
  var loginname = $('#username').val();
  var password = $('#password').val();
  var password2 = $('#password2').val();
  var email = $('#email').val();

  $.post('/reg',{
    loginname: loginname,
    password: password,
    repassword: password2,
    email: email
  }, function(data){
    if(data.rt){
      $('#reg span').html(data.msg).css({color:'blue'});
    }
    else{
      $('#reg span').html(data.err).css({color:'red'});
    }
  })
})





