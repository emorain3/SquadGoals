const Subgoal = require('../models/Subgoal');
const Goal = require('../models/Goal');


const subgoalController = {
    show: (req, res) => {
        let id = req.params.id;
        
        Subgoal.findById(id).then( sgoal => {
            console.log(sgoal)
            res.send(sgoal)
        })
        // Goal.findById(id).populate('goals').then( goal => {
        //     // console.log(goal)
        //     res.send(goal)
        // })
    
    },

    create: (req, res) =>{
        let subGoalId = req.params.goalId
        Goal.findById(subGoalId)
        .then((goal)=>{
            console.log(goal)
            Subgoal.create(req.body)
            .then((newSubgoal)=>{
            console.log(newSubgoal)
                goal.subgoals.push(newSubgoal)
                goal.save()
                res.send(newSubgoal)
            })
        })
    },

    update: (req, res) => {
        let id = req.params.id;
        console.log("Editing: " + id);
        Subgoal.findByIdAndUpdate(id, req.body, {new: true}).then(sgoal => res.send(sgoal))
    },

    delete: (req, res) => {
        let id = req.params.id;
        // console.log("Deleting: " + id);
        Subgoal.findByIdAndDelete(id).then(sgoal => {
            console.log("HEY YOU! goal found: " + sgoal)
            res.send(sgoal)
        })
    },
}

module.exports = subgoalController