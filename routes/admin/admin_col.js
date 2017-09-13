const express = require('express');
const router = express.Router();

const Col = require('../../models/col');//引入model
router.get('/',(req,res)=>{
	Col.find()//数据查找
	    .then(data => {
            res.render('admin/col/index', { list: data });
        })
})

router.get('/add',(req,res)=>{
	res.render('admin/col/add')
})


// const Row = require('../../models/row')
// router.get('/add', (req, res) => {
//     Row.find()
//         .then(data => {
//             res.render('admin/row/add')
//         })

// })

router.post('/add', (req, res) => {
    var model = new Col(req.body);
    model.save()
        .then(data => {
            console.log(data)
            // res.send('保存成功')
						res.redirect('/admin/cols');//页面重定向
        })
        .catch(err => {
            console.log(err)
            res.send(err);
        })
})

module.exports = router;