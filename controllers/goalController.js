const User = require('../models/User');
const Goal = require('../models/Goal');


const goalController = {
    show: (req, res) => {
        let id = req.params.id;
        
        Goal.findById(id).then( goal => {
            console.log(goal)
            res.send(goal)
        })
        // Goal.findById(id).populate('goals').then( goal => {
        //     // console.log(goal)
        //     res.send(goal)
        // })
    
    },
    create: (req, res) => {
        Goal.create({
            title: req.body.title,
            description: req.body.description,
            image_url: req.body.image_url, 
            collaborators: req.body.collaborators,
            subgoals: req.body.subgoals,
        }).then(() => Goal.find({}).then(goals => {
            console.log("These are the goals in my database: " + goals)
            res.send(goals);
        }))
    },

    update: (req, res) => {
        let id = req.params.id;
        console.log("Editing: " + id);
        Goal.findByIdAndUpdate(id, req.body, {new: true}).then(goal => res.send(goal))
    },

    delete: (req, res) => {
        let id = req.params.id;
        // console.log("Deleting: " + id);
        Goal.findByIdAndDelete(id).then(goal => {
            console.log("HEY YOU! goal found: " + goal)
            res.send(goal)
        })
    },
}

module.exports = goalController