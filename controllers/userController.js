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
        res.send({data: "You do not have permission to create a new user silly."})
    },
    show: (req, res) => {
        // let id = req.params.id;
        // User.findById(id).populate('goals').then( user => {
        //     // console.log(User)
        //     res.send(user)
        // })
        res.send("This should show user profile data...")
    
    },

    // edit: (req, res) => {
    //     let id = req.params.id;
    //     // console.log("The id received: " + id);
    //     Goal.findById(id).then( goal => {
    //         res.send(goal)
    //     })
    // },

    update: (req, res) => {
        res.send("No update can be made to profile atm.")
    },

    delete: (req, res) => {
        res.send("You shouldn't be able to delete a user....")
    },
}

module.exports = userController