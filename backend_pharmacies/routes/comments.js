const express = require('express');
const commentCtrl = require('../controllers/comment');
const auth =require('../middleware/auth');

const multer= require('../middleware/middleware-config');
const router = express.Router() ;// créer un router avac la méthode router de express




router.post('/',auth,  commentCtrl.createComment );


router.delete('/:id',auth, commentCtrl.deleteOneComment);
router.get('/', commentCtrl.getAllComment);

module.exports =router ;