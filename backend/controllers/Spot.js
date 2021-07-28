const SubPlace = require('../models/SubPlace');
const Spot = require('../models/Spot');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('express-async-handler');

//@desc      get all places
//@route     GET /api/v1/subplaces/:subplaceId/spots
//@route     GET  /api/v1/spots/
//@access    Public
exports.getSpots = asyncHandler(async (req, res) => {
	let query;
	if (req.params.subplaceId) {
		query = Spot.find({ subplace: req.params.subplaceId });
	} else {
		query = Spot.find().populate({
			path: 'subplace',
			select: 'name description',
		});
	}
	const spots = await query;
	//Send a response
	res.status(200).json({ success: true, count: spots.length, data: spots });
});

//@desc      get single places
//@route     GET  /api/v1/spots/:id
//@access    Public
exports.getSpot = asyncHandler(async (req, res) => {
	const spot = await Spot.findById(req.params.id).populate({
		path: 'subplace',
		select: 'name description',
	});
	if (!spot) {
		throw new ErrorResponse(`Spot not found with ${req.params.id}`, 404);
	}
	//Send a response
	res.status(200).json({ success: true, data: spot });
});

//@desc      add new spot
//@route     POST  /api/v1/subplaces/:subplaceId/spots
//@access    Private
exports.addSpot = asyncHandler(async (req, res) => {
	req.body.subplace = req.params.subplaceId;
	const subplace = await SubPlace.findById(req.params.subplaceId);
	if (!subplace)
		throw new ErrorResponse(
			`Sub-Place not found with ${req.params.subplaceId}`,
			404
		);
	const spot = await Spot.create(req.body);
	if (!spot) {
		throw new ErrorResponse('Couldnt add a spot', 404);
	}
	//Send a response
	res.status(201).json({ success: true, data: spot });
});
