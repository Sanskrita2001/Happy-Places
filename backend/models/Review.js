const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
	{	
		userName: {
			type: String,
			required: [true, 'Please enter your name']
		},
		phone: {
			type: Number,
			required: [true, 'Please ennter your phone number']
		},
		title: {
			type: String,
			trim: true,
			required: [true, 'Please add a title for the review'],
			maxlength: 100,
		},
		text: {
			type: String,
			required: [true, 'Please add some text'],
		},
		rating: {
			type: Number,
			min: 1,
			max: 10,
			required: [true, 'Please add a rating from 1-10'],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Review', ReviewSchema);
