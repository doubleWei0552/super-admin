// 列信息
const db = require('../db');
const mongoose = db.mongoose;
const Schema = db.Schema;

const colSchema = new Schema({
	name:{
		type:String,
		default:''
	},
	description:{
		type:String,
		default:''
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

const Col = mongoose.model('col',colSchema);
module.exports = Col;