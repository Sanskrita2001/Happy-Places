const express = require('express');
const { getSpots, addSpot } = require('../controllers/Spot');
const router = express.Router({ mergeParams: true });

//Add routers
router.route('/').get(getSpots).post(addSpot);

module.exports = router;
