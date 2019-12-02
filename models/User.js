const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    surname: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    bithname: {
        type: Date,
        default: Date.now
    }
}) 

module.exports = mongoose.model('Users', UserSchema);