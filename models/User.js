const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    bithname: {
        type: Date,
        default: Date.now
    }
}) 

module.exports = mongoose.model('Users', UserSchema);