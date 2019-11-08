const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema Definition
let User = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /\S+@\S+\.\S+/,
        index: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    accessToken: {
        type: String,
        unique: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    memberSince: {
        type: Date,
        default: new Date()
    }
},{
    collection: 'users'    
});

module.exports = mongoose.model('User', User);

