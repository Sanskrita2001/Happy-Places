const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a place name'],
		},
		description: {
			type: String,
			required: [true, 'Please add a description'],
		},
		location: {
			type: {
				type: String,
				enum: ['Point'],
			},
			coordinates: {
				type: [Number],
				index: '2dsphere',
			},
		},
		averageRating: {
			type: Number,
			min: [1, 'Rating must be at least 1'],
			max: [10, 'Rating must not be more than 10'],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Place', PlaceSchema);
