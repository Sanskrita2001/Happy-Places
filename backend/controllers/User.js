const asyncHandler = require('express-async-handler');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../models//User');

// @desc    Register User
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res) => {
	const { name, email, phone, role } = req.body;

	//Create User
	const user = await User.create({
		name,
		email,
		phone,
		role,
	});

	if(!user){
		throw new ErrorResponse('Couldnt create a user', 404);
	}
});




