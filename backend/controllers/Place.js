const Place = require('../models/Place');
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('express-async-handler');

//@desc      get all places
//@route     GET  /api/v1/places/
//@access    Public
exports.getPlaces = asyncHandler(async (req, res) => {
	const places = await Place.find();
	//Send a response
	res.status(200).json({ success: true, count: places.length, data: places });
});

//@desc      get single place
//@route     GET  /api/v1/places/:id
//@access    Public
exports.getPlace = asyncHandler(async (req, res) => {
	const place = await Place.findById(req.params.id);
	if (!place)
		throw new ErrorResponse(`Place not found with ${req.params.id}`, 404);
	//Send a response
	res.status(200).json({ success: true, data: place });
});

//@desc      add new place
//@route     POST  /api/v1/places/
//@access    Private
exports.createPlace = asyncHandler(async (req, res) => {
	const { name, description, address, location, averageRating } = req.body;
	const place = await Place.create({
		name,
		description,
		address,
		location,
		averageRating,
	});
	if (!place) {
		throw new ErrorResponse('Couldnt add a place', 404);
	}
	//Send a response
	res.status(201).json({ success: true, data: place });
});

//@desc      update place
//@route     PUT  /api/v1/places/:id
//@access    Private
exports.updatePlace = asyncHandler(async (req, res) => {
	let place = await Place.findById(req.params.id);
	if (!place)
		throw new ErrorResponse(`Place not found with ${req.params.id}`, 404);
	place = await Place.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	//Send a response
	res.status(200).json({ success: true, data: place });
});

//@desc      delete place
//@route     DELETE  /api/v1/places/:id
//@access    Private
exports.deletePlace = asyncHandler(async (req, res) => {
	let place = await Place.findById(req.params.id);
	if (!place)
		throw new ErrorResponse(`Place not found with ${req.params.id}`, 404);
	place.remove();
	//Send a response
	res.status(200).json({ success: true, data: {} });
});



//@desc      Upload a photo
//@route     POST  /api/v1/places/:id/photo
//@access    Private
exports.placePhotoUpload = asyncHandler(async (req, res) => {
	let place = await Place.findById(req.params.id);
	if (!place)
		throw new ErrorResponse(`Place not found with ${req.params.id}`, 404);

	if (!req.file) throw new ErrorResponse(`Please upload a file`, 404);

	const file = req.file;

	res.status(200).json({ success: true, data: file });
	console.log(file);

	//Save the file variable in mongoDB
});
