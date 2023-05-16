const express = require('express');
const router = express.Router();
const auth =require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.post ('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/getAllUsers', userCtrl.getAllUsers);
router.post('/deleteOneUser/:id',auth, userCtrl.deleteOneUser);
router.post('/getOneUser/:id',auth, userCtrl.getOneUser);


module.exports = router ;