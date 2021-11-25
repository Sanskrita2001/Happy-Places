const jwt = require('jsonwebtoken')


exports.generateToken = (id)=> {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}
exports.verifyJwtToken = (token, next) => {
    try {
        const {userId} = jwt.verify(token, process.env.JWT_SECRET)
        return userId
    } catch (error) {
        next(error)
    }
    
}