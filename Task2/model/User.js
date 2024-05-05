const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: true
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Admin: Number
    },
    password: {
        type: String,
        require: true
    },
    wallet: {
        adress: String,
        privateKey: String
    },

    refreshToken: String,
    refreshTokenMobile: String
});

module.exports = mongoose.model('User', userSchema);