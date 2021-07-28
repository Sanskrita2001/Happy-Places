const express = require('express');
const { getSpots, addSpot, getSpot } = require('../controllers/Spot');
const router = express.Router({ mergeParams: true });

//Add routers
router.route('/').get(getSpots).post(addSpot);

router.route('/:id').get(getSpot);

module.exports = router;
