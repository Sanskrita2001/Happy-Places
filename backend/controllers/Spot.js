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

//@desc      update spot
//@route     PUT  /api/v1/spots/:id
//@access    Private
exports.updateSpot = asyncHandler(async (req, res) => {
	let spot = await Spot.findById(req.params.id);
	if (!spot)
		throw new ErrorResponse(`Spot not found with ${req.params.id}`, 404);
	spot = await Spot.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	//Send a response
	res.status(200).json({ success: true, data: spot });
});

//@desc      delete spot
//@route     DELETE  /api/v1/spots/:id
//@access    Private
exports.deleteSpot = asyncHandler(async (req, res) => {
	let spot = await Spot.findById(req.params.id);
	if (!spot)
		throw new ErrorResponse(`Sub-Place not found with ${req.params.id}`, 404);
	spot.remove();
	//Send a response
	res.status(200).json({ success: true, data: {} });
});

//@desc      upload photo
//@route     POST  /api/v1/spots/:id/photo
//@access    Private
exports.spotPhotoUpload = asyncHandler(async (req, res) => {
	let spot = await Spot.findById(req.params.id);
	if (!spot)
		throw new ErrorResponse(`Spot not found with ${req.params.id}`, 404);

	if (!req.file) throw new ErrorResponse(`Please upload a file`, 404);

	const file = req.file;

	//check if file is an image file
	if (!file.mimetype.startsWith('image'))
		throw new ErrorResponse(`Please upload an image file`, 400);

	//check file size
	if (file.size > process.env.MAX_FILE_UPLOAD)
		throw new ErrorResponse(
			`Please upload an image file of size less than ${process.env.MAX_FILE_UPLOAD}`,
			400
		);

	//create custom filename
	const ext = file.mimetype.split('/')[1];
	file.filename = `photo_${spot._id}.${ext}`;
	await Spot.findByIdAndUpdate(req.params.id, { photo: file.filename });

	res.status(200).json({ success: true, data: file });
	console.log(req.file);
});
