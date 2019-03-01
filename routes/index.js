let express = require('express')
let router = express.Router()

const userController = require('../controllers/userController')
const goalController = require('../controllers/goalController')
const subgoalController = require('../controllers/subgoalController')



router.get('/', userController.index); // displays all goals
router.post('/login', userController.create); // MAY NEED TO CONNECT TO AUTH PROCESSES
router.get('/profile/:id', userController.show);
router.put('/profile/edit/:id', userController.update);
router.delete('/profile/:id', userController.delete);


//  Goal Routes
router.get('/goal/:id', goalController.show); // displays selected goal
router.post('/goal', goalController.create);
router.put('/goal/edit/:id', goalController.update);
router.delete('/goal/:id', goalController.delete);


// Subgoal routes
router.get('/goal/:goalId/subgoal/:id', subgoalController.show); // displays selected goal
router.post('/goal/:goalId/subgoal', subgoalController.create); // displays selected goal
router.put('/subgoal/edit/:id', subgoalController.update); // displays selected goal
router.delete('/subgoal/:id', subgoalController.delete); // displays selected goal



module.exports = router;