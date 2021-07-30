const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const HotelSchema = new mongoose.Schema(
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
		website: {
			type: String,
			match: [
				/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
				'Please use a valid URL with HTTP or HTTPS',
			],
		},
		openHours: {
			start: { type: Number },
			end: { type: Number },
		},
		typeOfHotel: {
			type: String,
			enum: ['HomeStay', 'Fooding', 'Both'],
		},
	},
	{
		timestamps: true,
	}
);

//Geocode & create a location field
HotelSchema.pre('save', async function (next) {
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

module.exports = mongoose.model('Hotel', HotelSchema);
