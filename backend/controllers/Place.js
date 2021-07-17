const Place = require('../models/Place');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');

//@desc      add new place
//@route     POST  /api/v1/places/
//@access    Private
exports.createPlace = asyncHandler(async (req, res, next) => {
	const { name, description, location, averageRating } = req.body;
	const place = await Place.create({
		name,
		description,
		location,
		averageRating,
	});
	//Send a response
	res.status(201).json({ success: true, data: place });
});
