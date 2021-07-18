const Place = require('../models/Place');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('express-async-handler');

//@desc      get all placea
//@route     GET  /api/v1/places/
//@access    Public
exports.getPlaces = asyncHandler(async (req, res) => {
	const places = await Place.find();
	//Send a response
	res.status(200).json({ success: true, count: places.length, data: places });
});

//@desc      add new place
//@route     POST  /api/v1/places/
//@access    Private
exports.createPlace = asyncHandler(async (req, res) => {
	const { name, description, location, averageRating } = req.body;
	const place = await Place.create({
		name,
		description,
		location,
		averageRating,
	});
	if (!place) {
		throw new ErrorResponse('Couldnt add a place', 404);
	}
	//Send a response
	res.status(201).json({ success: true, data: place });
});
