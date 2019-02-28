const mongoose = require("../db/connection");
const Schema = mongoose.Schema;


const Subgoal = new Schema({
    title: String, 
    description: String, 
    isComplete: Boolean, // Want to make into an enum
    mainGoal: {
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    },
    
    collaborators: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Subgoals'
    }]
})




module.exports = mongoose.model('Subgoal', Subgoal)