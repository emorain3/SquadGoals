const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Goal = new Schema({
    title: String, 
    description: String,
    image_url: String, 
    collaborators: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    subgoals: [{
        type: Schema.Types.ObjectId,
        ref: 'Subgoal'
    }]
    
})




module.exports = mongoose.model('Goal', Goal)