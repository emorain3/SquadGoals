const User = require('../models/User');
const Goal = require('../models/Goal');


const userController = {
    index: (req, res) => {
        Goal.find({}).then(goals => {
            console.log("These are the goals in my database for you: " + goals)
            res.send(goals);
        })

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

    edit: (req, res) => {
        let id = req.params.id;
        // console.log("The id received: " + id);
        Goal.findById(id).then( goal => {
            res.send(goal)
        })
    },

    update: (req, res) => {
        let id = req.params.id;
        console.log("Editing: " + id);
        Item.findByIdAndUpdate(id, req.body, {new: true}).then(item => res.redirect('/'))
    },

    delete: (req, res) => {
        let id = req.params.id;
        console.log("Deleting: " + id);
        Item.findByIdAndDelete(id).then(items => {
            console.log("HEY YOU! items found: " + items)
            res.send(items)
        })
    },
}

module.exports = userController