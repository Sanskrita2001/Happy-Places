const express = require('express');
const { register } = require('../controllers/User');
const sendMessage = require('../utils/sendOtp')
const router = express.Router();

router.post('/register', register);
router.get('/otp', sendMessage)

module.exports = router;
