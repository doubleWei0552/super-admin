var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * 用户注册
 */
router.get('/reg',(req,res)=>{
	res.render('user/reg')
})

module.exports = router;
