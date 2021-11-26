const mongoose = require('mongoose')

const PlanSchema = new mongoose.Schema({
    location: {
        type: String
    },
    days:{
        type: String
    },
    places: {
        type: String
    },
    startingDate: {
        type: Date
    },
    endingDate: {
        type: Date
    },
    plan: {
        type: String
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Plan', PlanSchema)