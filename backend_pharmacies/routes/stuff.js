const express = require('express');
const stuffCtrl = require('../controllers/stuff');
const auth =require('../middleware/auth');

const multer= require('../middleware/middleware-config');
const router = express.Router() ;// créer un router avac la méthode router de express








router.post('/',auth, multer, stuffCtrl.createThing );

router.put('/:id',auth,multer, stuffCtrl.modifyThing);
router.post('/getAllThing', stuffCtrl.getAllThing);

router.get('/:id', stuffCtrl.getOneThing);

router.delete('/:id',auth, stuffCtrl.deleteOneThing);

router.post('/getAllThings', stuffCtrl.getAllThings);

router.post('/getAllThing2', stuffCtrl.getAllThing2);
router.post('/getAllThing3', stuffCtrl.getAllThing3);

 
module.exports =router ;