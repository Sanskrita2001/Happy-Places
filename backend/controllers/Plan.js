const Plan = require('../models/Plan')
const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('express-async-handler');


//@desc      add new plan
//@route     POST  /api/v1/plan/
//@access    Private
exports.createPlan = asyncHandler(async (req, res) => {
	const plan = await Plan.create(req.body);
	if (!plan) {
		throw new ErrorResponse('Couldnt add a plan', 404);
	}
	//Send a response
	res.status(201).json({ success: true, data: plan });
});


//@desc      get all plan
//@route     GET  /api/v1/plan/
//@access    Private
exports.getPlan = asyncHandler(async (req, res) => {
	const plan = await Plan.find({user: req.user.id});
	if (!plan) {
		throw new ErrorResponse('Couldnt get a place', 404);
	}
	//Send a response
	res.status(201).json({ success: true, data: plan });
});