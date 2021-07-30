const express = require('express');
const {
	getHotel,
	addHotel,
	getHotels,
	updateHotel,
	deleteHotel,
} = require('../controllers/Hotel');
const router = express.Router();

//Add routes
router.route('/').get(getHotels).post(addHotel);

router.route('/:id').get(getHotel).put(updateHotel).delete(deleteHotel);

module.exports = router;
