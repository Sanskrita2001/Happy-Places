const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware')
const {getPlan, createPlan} = require('../controllers/Plan')

router.route('/').get(protect, getPlan).post(protect, createPlan)

module.exports = router;