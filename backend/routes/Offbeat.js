const express = require('express')
const router = express.Router()
const {getOffPlaces, createOffbeatPlace} = require('../controllers/Offbeat')
const {protect} = require('../middlewares/authMiddleware')

router.route('/').post(protect, createOffbeatPlace).get(getOffPlaces)

module.exports = router