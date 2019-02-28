const User = require('../models/User');
const Goal = require('../models/Goal');


const goalController = {
    show: (req, res) => {
        let id = req.params.id;
        User.findById(id).populate('goals').then( user => {
            // console.log(User)
            res.render('shop/showUser', {user})
        })
    
    },
    create: (req, res) => {
        let userId = req.params.id;
        console.log("\n \n req.body looks like: \n" + req.body + "\n")
        User.findById(userId).then( user => {
            Goal.create({
                author: "Anon", 
                message: req.body.message, 
            }).then( newgoal => {
                user.goals.push(newgoal)
                user.save()
                res.redirect('/user/' + userId)
            })
        })
    }
}

module.exports = goalController