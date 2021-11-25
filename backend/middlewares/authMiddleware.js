const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const ErrorResponse = require('../utils/ErrorResponse')

exports.protect = asyncHandler(async(req, res, next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded)
            req.user = await User.findById(decoded.id)
            next()
        } catch (error) {
            console.error(error)
             throw new ErrorResponse('Not authorized, token failed', 401)
        }
    }
    if (!token) {
        throw new ErrorResponse('Not authorized, no token', 401)
    }
})

exports.authorize = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            throw new ErrorResponse('You are not authorized to access this route', 403)
        }
        next();
    }
}