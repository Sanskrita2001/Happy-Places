const Offbeat = require('../models/Offbeat')
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('express-async-handler');

//@desc      get all offbeat places
//@route     GET  /api/v1/offbeat/
//@access    Public
exports.getOffPlaces = asyncHandler(async (req, res) => {
	const places = await Offbeat.find()
	//Send a response
	res.status(200).json({ success: true, count: places.length, data: places });
});

//@desc      add new place
//@route     POST  /api/v1/places/
//@access    Private
exports.createOffbeatPlace = asyncHandler(async (req, res) => {
	const place = await Offbeat.create(req.body);
	if (!place) {
		throw new ErrorResponse('Couldnt add a place', 404);
	}
	//Send a response
	res.status(201).json({ success: true, data: place });
});