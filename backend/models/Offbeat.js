const mongoose = require('mongoose');

const OffBeatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    photo: {
        type: String,
        default: 'https://gotraveldiscoverer.files.wordpress.com/2016/08/kolakham1.jpg'
    },
    place:{
        type: String,
        required: true
    },
    nearestAirport:{
        type: String
    },
    nearestRailwayStation: {
        type: String
    },
    hotelAvailable: {
        type: String,
        enum: ['enough', 'few']
    },
    rating: {
        type: String
    },
    suggestedBy: {
        type: String
    }
})

module.exports = mongoose.model('Offbeat', OffBeatSchema)