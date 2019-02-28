const User = require('../models/User');
const Goal = require('../models/Goal');




let initialUsers = [
    {
        name: "John Doe", 
        contact: "johndoe@gmail.com",
        goals: [],
        friends: []
    },
    {
        name: "Jane Doe", 
        contact: "janedoe@gmail.com",
        goals: [],
        friends: []
    },
    {
        name: "Jimmothy Doe", 
        contact: "jimmothydoe@gmail.com",
        goals: [],
        friends: []
    },
    {
        name: "Ecclesia", 
        contact: "emorain@live.com",
        goals: [],
        friends: []
    },
]

User.deleteMany().then(() => {
    return User.deleteMany()
}).then(() => {
    User.create(initialUsers).then(users => {
        console.log("The following users have been saved: ", users);
    }).then(users => {
        User.findOne({name: 'Ecclesia'}).then( user => {
            console.log("The following user is being edited: ", user);
            Goal.create({
                title: "Get Swole For Summer", 
                description: "get swole before vacation in July",
                image_url: "", 
                collaborators: [],
                subgoals: []
            }).then( newGoal => {
                user.goals.push(newGoal)
                // item.save()
                Goal.create({
                    title: "Mother's Day Gift 2019", 
                    description: "pitch in $25 each week and me and luh sis can get mom sufin purty",
                    image_url: "", 
                    collaborators: [],
                    subgoals: []
                }).then( newGoal2 => {
                    user.goals.push(newGoal2)
                    user.save()
                    console.log("\n ......... \n \n The following user has been changed: ", user);
                })
            })
        })
    })
})

