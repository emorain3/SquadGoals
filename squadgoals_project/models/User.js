const mongoose = require("../db/connection")
const Schema = mongoose.Schema


const User = new Schema({
    name: String, 
    contact: String,
    goals: [{
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})




module.exports = mongoose.model('User', User)