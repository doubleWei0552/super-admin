// 行信息
const db = require('../db');
const mongoose = db.mongoose;
const Schema = db.Schema;

const rowSchema = new Schema({
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

const Row = mongoose.model('row',rowSchema);
module.exports = Row;
