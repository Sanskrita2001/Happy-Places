const Place = require('../models/Place');
//@desc      create new place
//@route     POST  /api/v1/places/
//@access    Private
exports.createPlace = async (req, res) => {
	try {
		const { name, description, location, averageRating } = req.body;
		const place = await Place.create({
			name,
			description,
			location,
			averageRating,
		});
		res.status(201).json({ success: true, data: place });
	} catch (error) {
		res.status(404).json({ success: false });
	}
};
