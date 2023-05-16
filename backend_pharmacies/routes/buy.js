const express = require('express');
const buyCtrl = require('../controllers/buy');
const auth =require('../middleware/auth');

const multer= require('../middleware/middleware-config');
const router = express.Router() ;// créer un router avac la méthode router de express








router.post('/',auth, multer, buyCtrl.createBuy );

//router.put('/:id',auth,multer, buyCtrl.modifyBuy);

router.get('/:id',auth, buyCtrl.getOneBuy);

router.delete('/:id',auth, buyCtrl.deleteOneBuy);

router.get('/',auth, buyCtrl.getAllBuy);
 
module.exports =router ;