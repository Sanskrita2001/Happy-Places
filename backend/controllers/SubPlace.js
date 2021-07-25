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

//@desc      get single subplace
//@route     GET  /api/v1/subplaces/:id
//@access    Public
exports.getSubPlace = asyncHandler(async (req, res) => {
	const subPlace = await SubPlace.findById(req.params.id).populate({
		path: 'place',
		select: 'name description',
	});
	if (!subPlace)
		throw new ErrorResponse(`Sub-Place not found with ${req.params.id}`, 404);
	//Send a response
	res.status(200).json({ success: true, data: subPlace });
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

//@desc      update subplace
//@route     PUT  /api/v1/subplaces/:id
//@access    Private
exports.updateSubPlace = asyncHandler(async (req, res) => {
	let subPlace = await SubPlace.findById(req.params.id);
	if (!subPlace)
		throw new ErrorResponse(`Sub-Place not found with ${req.params.id}`, 404);
	subPlace = await SubPlace.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	//Send a response
	res.status(200).json({ success: true, data: subPlace });
});

//@desc      delete subplace
//@route     DELETE  /api/v1/subplaces/:id
//@access    Private
exports.deleteSubPlace = asyncHandler(async (req, res) => {
	let subPlace = await SubPlace.findById(req.params.id);
	if (!subPlace)
		throw new ErrorResponse(`Sub-Place not found with ${req.params.id}`, 404);
	subPlace.remove();
	//Send a response
	res.status(200).json({ success: true, data: {} });
});

//@desc      upload photo
//@route     POST  /api/v1/subplaces/:id/photo
//@access    Private
exports.subPlacePhotoUpload = asyncHandler(async (req, res) => {
	let subPlace = await SubPlace.findById(req.params.id);
	if (!subPlace)
		throw new ErrorResponse(`Sub Place not found with ${req.params.id}`, 404);

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
	file.filename = `photo_${subPlace._id}.${ext}`;
	await SubPlace.findByIdAndUpdate(req.params.id, { photo: file.filename });

	res.status(200).json({ success: true, data: file });
	console.log(req.file);
});
