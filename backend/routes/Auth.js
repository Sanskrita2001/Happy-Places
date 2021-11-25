const express = require('express');
const {register, verifyUser, login, getUserDetails} = require('../controllers/User');
const {protect} = require('../middlewares/authMiddleware')
const router = express.Router();

router.post('/', register);
router.get('/', protect, getUserDetails);
router.post('/login', login);
router.post('/verify', verifyUser);

module.exports = router;
