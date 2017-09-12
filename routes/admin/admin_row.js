const express = require('express');
const router = express.Router();

const Row = require('../../models/row');//引入model
router.get('/',(req,res)=>{
	Row.find()//数据查找
	    .then(data => {
            res.render('admin/row/index', { list: data });
        })
})

router.get('/add',(req,res)=>{
	res.render('admin/row/add')
})


// const Row = require('../../models/row')
// router.get('/add', (req, res) => {
//     Row.find()
//         .then(data => {
//             res.render('admin/row/add')
//         })

// })

router.post('/add', (req, res) => {
    var model = new Row(req.body);
    model.save()
        .then(data => {
            console.log(data)
            // res.send('保存成功')
						res.redirect('/admin/rows');//页面重定向
        })
        .catch(err => {
            console.log(err)
            res.send(err);
        })
})

module.exports = router;