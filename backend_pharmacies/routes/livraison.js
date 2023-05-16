const express = require('express');
const LivraisonCtrl = require('../controllers/livraison');
const auth =require('../middleware/auth');

const multer= require('../middleware/middleware-config');
const router = express.Router() ;// créer un router avac la méthode router de express


router.post('/',auth, multer, LivraisonCtrl.CreateLivraison );

//router.put('/:id',auth,multer, LivraisonCtrl.modifyLivraison);

//router.get('/:id/:group_id',auth, LivraisonCtrl.getOneLivraison);

//router.delete('/:id',auth, LivraisonCtrl.deleteOneLivraison);

//router.get('/',auth, LivraisonCtrl.getAllLivraison);
 
module.exports =router;