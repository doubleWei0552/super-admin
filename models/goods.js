const db = require('../db');
const mongoose = db.mongoose;
const Schema = db.Schema;

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
const Goods = mongoose.model('goods',goodsSchema);


module.exports = Goods;