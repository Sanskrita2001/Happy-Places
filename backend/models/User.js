const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			match: [
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Please use a valid email',
			],
			unique: true,
		},
		phone: {
			type: String,
			unique: true,
			required: [true, 'Please add a phone number'],
			minlength: 10
		},
		role: {
			type: String,
			default: 'user',
		},
		otp: {
			type: String
		}
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', UserSchema);
