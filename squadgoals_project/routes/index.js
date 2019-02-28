let express = require('express')
let router = express.Router()

const userController = require('../controllers/goalController')
const goalController = require('../controllers/userController')



router.get('/', userController.index);
router.post('/login', userController.create);
router.get('/profile', userController.show);
router.put('/profile/edit/:id', userController.update);


//  Goal Routes
router.post('/goal/:id', goalController.show);
router.put('/goal/edit/:id', goalController.update);
router.delete('/goal/:id', goalController.delete);

module.exports = router;