const Hotel = require('../models/Hotel');
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('express-async-handler');

//@desc      get all hotels
//@route     GET  /api/v1/hotels/
//@access    Public
exports.getHotels = asyncHandler(async (req, res) => {
	const hotels = await Hotel.find();
	//Send a response
	res.status(200).json({ success: true, count: hotels.length, data: hotels });
});

//@desc      get single hotel
//@route     GET  /api/v1/hotels/:id
//@access    Public
exports.getHotel = asyncHandler(async (req, res) => {
	const hotel = await Hotel.findById(req.params.id);
	if (!hotel)
		throw new ErrorResponse(`Hotel not found with ${req.params.id}`, 404);
	//Send a response
	res.status(200).json({ success: true, data: hotel });
});

//@desc      add new hotel
//@route     POST  /api/v1/hotels/
//@access    Private
exports.addHotel = asyncHandler(async (req, res) => {
	const hotel = await Hotel.create(req.body);
	if (!hotel) {
		throw new ErrorResponse('Couldnt add a hotel', 404);
	}
	//Send a response
	res.status(201).json({ success: true, data: hotel });
});

//@desc      update hotel
//@route     PUT  /api/v1/hotels/:id
//@access    Private
exports.updateHotel = asyncHandler(async (req, res) => {
	let hotel = await Hotel.findById(req.params.id);
	if (!hotel)
		throw new ErrorResponse(`Hotel not found with ${req.params.id}`, 404);
	hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	});
	//Send a response
	res.status(200).json({ success: true, data: hotel });
});

//@desc      delete hotel
//@route     DELETE  /api/v1/hotels/:id
//@access    Private
exports.deleteHotel = asyncHandler(async (req, res) => {
	let hotel = await Hotel.findById(req.params.id);
	if (!hotel)
		throw new ErrorResponse(`Hotel not found with ${req.params.id}`, 404);
	hotel.remove();
	//Send a response
	res.status(200).json({ success: true, data: {} });
});
