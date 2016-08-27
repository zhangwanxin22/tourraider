var router = require('express').Router();
var testApi = require('./apis/test');
var userApi = require('./apis/user');
var indexApi = require('./apis/index');

/****************  page *****************/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'tourRarder' });
});

router.get('/test1', function(req, res, next) {
  res.render('test1', { title: 'test1' });
});

/**************** apis ***********************/
/* test */
router.get('/test', testApi.test);
router.post('/testsendMail', testApi.sendmail);


/* user */
router.post('/reg', userApi.reg );
router.post('/login', userApi.login );


/* index */

/* detail */


module.exports = router;
