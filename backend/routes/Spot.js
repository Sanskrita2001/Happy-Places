const express = require('express');
const {
	getSpots,
	addSpot,
	getSpot,
	updateSpot,
	deleteSpot,
} = require('../controllers/Spot');
const router = express.Router({ mergeParams: true });

//Add routers
router.route('/').get(getSpots).post(addSpot);

router.route('/:id').get(getSpot).put(updateSpot).delete(deleteSpot);

module.exports = router;
