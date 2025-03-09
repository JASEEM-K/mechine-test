import mongoose, { Schema } from 'mongoose'


const DBSchema = new Schema(
	{
		message: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
	}
)

const dbmodel = mongoose.model('Db', DBSchema);
export default dbmodel

