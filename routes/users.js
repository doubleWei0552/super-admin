var express = require('express');
var router = express.Router();

const Row = require('../models/row')
const Col = require('../models/col')
const User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
	const rowData = Row.find();
	const colData = Col.find();
	const userData = User.find();
	const allP = Promise.all([rowData,colData,userData]);
	allP.then(([rowList,colList,users])=>{
		res.render('user/index',{
			rowList,colList,users
			
		})
		
	})
	
  // res.send('respond with a resource');
	// res.render('user/index')

});

/**
 * 用户注册
 */
router.get('/reg',(req,res)=>{
	// Row.find()
	// .then(rowList=>{
	// 		Col.find()
	// 		.then(colList=>{
	// 			res.render('user/reg',{
	// 				rowList:rowList,
	// 				colList:colList
	// 			})
	// 		})
	// })


// 在mongoose中find()返回一个Promise对象
// 通过调用then返回成功之后的回调函数
// Promise.all组装一个Promise对象组成的数组
// 当数组中所有的对象执行成功之后调用then方法
// then中以数组形式接收每一个对象成功之后的返回值
	const rowData = Row.find();
	const colData = Col.find();

// 方法1
	const allP = Promise.all([rowData,colData]);
	// 此处使用结构赋值方式
	// 在js中如果属性名和属性值是一样的，可以省略一个
	allP.then(([rowList,colList])=>{
		res.render('user/reg',{
			rowList,
			colList
		})
	})

// 方法2
	// rowData.then(rowList=>{
	// 	colData.then(colList=>{
	// 		res.render('user/reg',{
	// 			rowList,
	// 			colList
	// 		})
	// 	})
	// })

	// res.render('user/reg')
})
router.post('/reg',(req,res)=>{
	const model = new User(req.body);
	User.count({row_id:req.body.row_id,
	col_id:req.body.col_id})
	.then(c=>{
		console.log(c)
		if(c>0){
			res.send('此位置已经有人了')
		}else{
			// res.send('此位置可以做')
			model.save()
			.then(data=>{
				res.redirect('/users');//页面重定向
				console.log('保存成功')
			})
			.catch(err=>{
				console.log(err);
				res.send(err)
			})
		}
	})
// model.save()
// 	.then(data=>{
// 		res.send(data)
// 	})
// 	.catch(err=>{
// 		console.log(err);
// 		res.send(err)
// 	})

	
})

module.exports = router;
