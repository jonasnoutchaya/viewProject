const express = require('express');
const CommandeCtrl = require('../controllers/commandes');
const auth =require('../middleware/auth');

const multer= require('../middleware/middleware-config');
const router = express.Router() ;// créer un router avac la méthode router de express








router.post('/',auth, multer, CommandeCtrl.createCommande );

router.put('/:id',auth,multer, CommandeCtrl.modifyCommande);

router.get('/:id/:group_id',auth, CommandeCtrl.getOneCommande);

router.delete('/:id',auth, CommandeCtrl.deleteOneCommande);
router.post('/:id',auth, CommandeCtrl.deleteOneCommande2);

router.get('/',auth, CommandeCtrl.getAllCommande);
router.get('/:id',auth, CommandeCtrl.getAllUsersCommande);
router.post('/group/:id', CommandeCtrl.getAllgroupedCommande);
 
module.exports =router ;