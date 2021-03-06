const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const SubPlaceSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a place name'],
		},
		description: {
			type: String,
			required: [true, 'Please add a description'],
		},
		address: {
			type: String,
			required: [true, 'Please add an address'],
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
			formattedAddress: String,
			city: String,
			state: String,
			zipcode: String,
			country: String,
		},
		averageRating: {
			type: Number,
			min: [1, 'Rating must be at least 1'],
			max: [10, 'Rating must not be more than 10'],
		},
		photo: {
			type: String,
			default: 'no-photo.jpg',
		},
		transport: {
			type: String,
			required: [true, 'Please enter the transports that are available']
		},
		distance: {
			type: Number,
		},
		timeTaken: {
			type: String,
		},
		minNoOfDaysStay: {
			type: Number,
		},
		seasonalTiming: {
			type: String,
			enum: ['Spring', 'Summer', 'Monsoonal', 'Autumnal', 'Winter'],
			required: [true, 'Please add a seasonal timing'],
		},
		place: {
			type: mongoose.Schema.ObjectId,
			ref: 'Place',
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

//Geocode & create a location field
SubPlaceSchema.pre('save', async function (next) {
	const res = await geocoder.geocode(this.address);
	this.location = {
		type: 'Point',
		coordinates: [res[0].latitude, res[0].longitude],
		formattedAddress: res[0].formattedAddress,
		city: res[0].city,
		state: res[0].stateCode,
		zipcode: res[0].zipcode,
		country: res[0].countryCode,
	};
	//Do not save address in DB
	this.address = undefined;
	next();
});

//Reverse-populate with virtuals
SubPlaceSchema.virtual('spots', {
	ref: 'Spot',
	localField: '_id',
	foreignField: 'subplace',
	justOne: false,
});

module.exports = mongoose.model('SubPlace', SubPlaceSchema);
