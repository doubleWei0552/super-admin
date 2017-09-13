// 用户信息
const db = require('../db');
const mongoose = db.mongoose;
const Schema = db.Schema;

const userSchema = new Schema({
	name:{
		type:String,
		default:''
	},
	gender:{
		type:String,
		default:'男'
	},
	row_id:{
		type:Schema.Types.ObjectId,
		ref:'row'
	},
	col_id:{
		type:Schema.Types.ObjectId,
		ref:'col'
	},
	created_at:{
		type:Date,
		default:Date.now
	},
	updated_at:{
		type:Date,
		default:Date.now
	}
});

const User = mongoose.model('user',userSchema);
module.exports = User;