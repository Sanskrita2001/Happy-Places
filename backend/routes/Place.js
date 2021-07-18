const express = require('express');
const { createPlace, getPlaces } = require('../controllers/Place');
const router = express.Router();

//Add routes
router.route('/').post(createPlace).get(getPlaces);

module.exports = router;
