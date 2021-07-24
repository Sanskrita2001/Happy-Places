const express = require('express');
const {
	createPlace,
	getPlaces,
	getPlace,
	updatePlace,
	deletePlace,
} = require('../controllers/Place');
const router = express.Router();

//Add routes
router.route('/').post(createPlace).get(getPlaces);

router.route('/:id').get(getPlace).put(updatePlace).delete(deletePlace);

module.exports = router;
