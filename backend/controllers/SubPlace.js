const SubPlace = require('../models/SubPlace');
const Place = require('../models/Place');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('express-async-handler');

//@desc      get all places
//@route     GET /api/v1/places/:placeId/subplaces
//@route     GET  /api/v1/subplaces/
//@access    Public
exports.getSubPlaces = asyncHandler(async (req, res) => {
	let query;
	if (req.params.placeId) {
		query = SubPlace.find({ place: req.params.placeId });
	} else {
		query = SubPlace.find().populate({
			path: 'place',
			select: 'name description',
		});
	}
	const subPlaces = await query;
	//Send a response
	res
		.status(200)
		.json({ success: true, count: subPlaces.length, data: subPlaces });
});

//@desc      add new subPlace
//@route     POST  /api/v1/places/:placeId/subplaces
//@access    Private
exports.addSubPlace = asyncHandler(async (req, res) => {
	req.body.place = req.params.placeId;
	const place = await Place.findById(req.params.placeId);
	if (!place)
		throw new ErrorResponse(`Place not found with ${req.params.placeId}`, 404);
	const subPlace = await SubPlace.create(req.body);
	if (!subPlace) {
		throw new ErrorResponse('Couldnt add a place', 404);
	}
	//Send a response
	res.status(201).json({ success: true, data: subPlace });
});
