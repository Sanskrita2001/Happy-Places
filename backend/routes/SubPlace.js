const express = require('express');
const { getSubPlaces, addSubPlace } = require('../controllers/SubPlace');

const router = express.Router({ mergeParams: true });

router.route('/').get(getSubPlaces).post(addSubPlace);

module.exports = router;
