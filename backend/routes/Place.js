const express = require('express');
const { createPlace } = require('../controllers/Place');
const router = express.Router();

//Add routes
router.route('/').post(createPlace);

module.exports = router;
