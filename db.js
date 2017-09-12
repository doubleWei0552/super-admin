/**
 * mongoose 是一个nodejs链接mongodb 的 orm
 * orm 对象关系模型映射，把一个对象映射到数据库中的表（集合）之上
 * 在mongoose中会自动在数据库中生成对象的复数形式作为对象的存储表（集合）
 */

const mongoose = require('mongoose');//引入mongoose插件
mongoose.Promise = global.Promise;//使用nodejs内置的promise对象
const Schema = mongoose.Schema;				//Schema模型架构
mongoose.connect('mongodb://localhost/super_shop',{
	useMongoClient:true
});
const goodsTypeSchema = new Schema({
	name:{
		type:String,
		default:''
	},
	description:{
		type:String,
		default:''
	},
	create_at:{
		type:Date,
		default:Date.now
	},
	updated_at:{
		type:Date,
		default:Date.now
	}
});



const goodsSchema = new Schema({
  name:{
    type:String,
    default:''
  },
  price:{
    type:Number,
    default:''
  },
  description:{
    type:String,
    default:''
  },
  store_count:{
  type:Number,
  default:0
  },
  content:{
    type:String,
    default:''
  },
  goods_type:{
    type:Schema.Types.ObjectId,//分类id
    ref:'goods_type'//关联的模型，在创建模型（model)时候的参数：模型的名字
  }
});

goodsSchema.statics.findByName = function(name,cb){
	this.find({name:name})
		.then(data=>{
			cb(data)
		})
		.catch(err=>{
			console.log(err)
			cb({})
		})
}

const Goods = mongoose.model('goods',goodsSchema);
Goods.findByName('iphone 8',function(r){
	console.log(r);
})
// 通过populated实现表关联查询
// Goods.find({}).populate('goods_type')
// 	.then(res=>{
// 		console.log(res)
// 	})
// 	.catch(err=>{
// 		console.log(err)
// 	})
// const goods = new Goods({
// 	name:'iphone 8',
// 	price:5999,
// 	description:'又要用肾换了',
// 	goods_type:'59b7483f74daea1b48d6ac85'
// })

// // 在mongoose中使用promise方法获取数据
// // 成功执行then，失败执行catch
// goods.save()
// 	.then(res=>{
// 			console.log(res)
// 	})
// 	.catch(err=>{
// 		console.log(err)
// 	})

// // 商品分类模型
// const GoodsType = mongoose.model('goods_type',goodsTypeSchema);

// const type = new GoodsType({
// 	name:'3C产品',
// 	description:'智能3C产品，手机，电脑，游戏周边'
// })
// type.save(function(err){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log('保存成功')
// 	}
// })

