const asyncHandler = require('express-async-handler');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../models//User');
const {generateOtp, fast2sms} = require('../utils/sendOtp')
const {generateToken} = require('../utils/tokenUtil')

// @desc    Register User
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res) => {
	const { name, email, phone, role } = req.body;

	const userExist = await User.findOne({phone})
	if(userExist){
		throw new ErrorResponse('User already exists with the given phone number', 400)
	}



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

	const phoneOtp = generateOtp(6);
	user.otp = phoneOtp
	res.status(200).json({
		message: "User registered successfully",
		data: user
	})

	await user.save()
});

// @desc    Login User
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async(req, res, next)=>{
	const {phone} = req.body
	const user = await User.findOne({phone});
	if(!user){
		throw new ErrorResponse('User doesnt exist with the given phone number. Please register', 400)
	}


      // generate otp
      const otp = generateOtp(6);
      // save otp to user collection
      user.otp = otp;
    //   user.isAccountVerified = true;
      await user.save();

	res.status(201).json({
        type: "success",
        message: "OTP sended to your registered phone number",
        data: {
          userId: user._id,
        },
      });

      try {
        await fast2sms(
            {
              message: `Your OTP is ${otp}`,
              contactNumber: user.phone,
            },
            next()
          );
    } catch (error) {
        throw new ErrorResponse(error, 500)
    }
})


// @desc    Verify User
// @route   POST /api/v1/auth/verify
// @access  Public
exports.verifyUser = asyncHandler(async(req, res)=>{
    const {otp, phone} = req.body;
    const user = await User.findOne({phone});
    if(!user){
        throw new ErrorResponse('The phone number you entered doesnt exist. Please enter a valid phone number', 400);
    }
    if(user.otp!==otp){
        throw new ErrorResponse('The otp entered is incorrect', 400);
    }
    
    const token = generateToken(user._id)
	if(token){
		user.otp = null;
	}
    if(!token){
        throw new ErrorResponse('Couldnt generate a token', 404)
    }
    res.status(200).json({
        userId: user._id,
        token
    })
})

//Get user details
exports.getUserDetails = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.user.id)
    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            phone: user.phone,
            role: user.role
        })
    } else{
        throw new ErrorResponse('User not found', 404)
    }
})