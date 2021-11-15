const asyncHandler = require('express-async-handler');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models//User');

// @desc    Register User
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res) => {
	const { name, email, password, role } = req.body;

	//Create User
	const user = await User.create({
		name,
		email,
		password,
		role,
	});

	sendTokenResponse(user, 200, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
	// Create token
	const token = user.getSignedJwtToken();

	const options = {
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
		),
		httpOnly: true,
	};

	res.status(statusCode).cookie('token', token, options).json({
		success: true,
		token,
	});
};
