import DBModel from '../modals/db.js'


export const addMessageHandler = async (req, res) => {
	try {
		const { message, author } = req.body
		if (!message || !author) {
			res.status(400).json({ message: "Please endter valid info" })
		}
		const newMessage = new DBModel({
			author,
			message
		})
		await newMessage.save()
		res.status(200).json(newMessage)
	} catch (error) {
		console.log(`Error in Adding Message ${error}`);
		res.status(500).json({ message: "Internal Servel Error" })
	}
}

export const getMessageHandler = async (_, res) => {
	try {
		const message = await DBModel.findOne()
		res.status(200).json(message)
	} catch (error) {
		console.log(`Error in Getting Message${error}`);
		res.status(500).json({ message: "Internal Servel Error" })
	}
}

