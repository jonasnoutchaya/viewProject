const Livraison = require('../models/Livraison');
const fs = require('fs');




exports.CreateLivraison = (req, res, next) => {
    console.log(" voici la commande à créer::::::!!!!!!!!");
    console.log(req.body.livraison);

    const livraisonObject = (req.body.livraison);
    delete livraisonObject._id;
    
   
    
    delete livraisonObject.email;
    delete livraisonObject._userId;

    console.log(livraisonObject)
    
    const livraison = new Livraison({
        ...livraisonObject,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    livraison.save() 
    .then(() => { res.status(201).json({message: 'livraison enregistré !'})})
    .catch(error => { console.log(error)})

/*Buy.collection.insertMany(req.body.buy, function (err, docs) {
    if (err){ 
      return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
      res.status(201).json({message: 'Objet enregistré !'})
    }
  });*/
 };











/*exports.createCommande = (req, res, next) => {



    console.log(" voici le commander à créer::::::!!!!!!!!");
    console.log(req.body.livraison);
    const livraisonObject = (req.body.livraison);
    for(var Object of livraisonObject){
    delete Object._id;
   
    
    delete Object.email;
    
    
    delete Object._userId; }
    console.log(livraisonObject);
    for(var objet_to_by of livraisonObject){
    const commande = new Livraison({
        ...objet_to_by,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    commande.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { console.log(error)})
}





/*exports.createCommande = (req, res, next) => {



    console.log(" voici le commander à créer::::::!!!!!!!!");
    console.log(req.body.livraison);
    const livraisonObject = (req.body.livraison);
    for(var Object of livraisonObject){
    delete Object._id;
   
    
    delete Object.email;
    
    
    delete Object._userId; }
    console.log(livraisonObject);
    for(var objet_to_by of livraisonObject){
    const commande = new Livraison({
        ...objet_to_by,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    commande.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { console.log(error)})
}
/*commande.collection.insertMany(req.body.livraison, function (err, docs) {
    if (err){ 
      return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
      res.status(201).json({message: 'Objet enregistré !'})
    }
  });
 };


/*exports.createcommande = (req, res, next) => {
    console.log(" voici le médicament à créer::::::!!!!!!!!");
    console.log(req.body.livraison);
    const livraisonObject = (req.body.livraison);
    delete livraisonObject._id;
    console.log(livraisonObject);
    delete livraisonObject._userId;
    
    const commande = new commande({
        ...livraisonObject,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    commande.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { console.log(error)})
 };*/


/*exports.modifyCommande = (req, res, next) => {
    const livraisonObject = req.file ? {
        ...JSON.parse(req.body.livraison),
    //    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {
        ...req.body
    };

    delete livraisonObject._userId;
    Livraison.findOne({
            _id: req.params.id
        })
        .then((commande) => {
            if (commande.userId != req.auth.userId) {
                res.status(401).json({
                    message: 'Not authorized'
                });
            } else {
                commande.updateOne({
                        _id: req.params.id
                    }, {
                        ...livraisonObject,
                        _id: req.params.id
                    })
                    .then(() => res.status(200).json({
                        message: 'Objet modifié!'
                    }))
                    .catch(error => res.status(401).json({
                        error
                    }));
            }
        })
        .catch((error) => {
            res.status(400).json({
                error
            });
        });
};

exports.getOneCommande = (req, res, next) => {
    console.log(":::::::::::::::::::::");
    console.log(req.params.id);
    console.log(":::::::::::::::");
    Livraison.find({
            drug_id: req.params.id,
            group_id: req.params.group_id
        })
        .then(commande => res.status(200).json(commande))
        .catch(error => res.status(404).json({
            error
        }));
};

exports.deleteOneCommande = (req, res, next) => {
    commande.deleteOne({
            _id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'objet supprimé'
        }))
        .catch(() => res.status(400).json({
            error
        }));
};


exports.getAllCommande = (req, res, next) => {

    Livraison.find().populate("drug_id")
        .then(Livraison => res.status(200).json(Livraison))
        .catch(error => console.log(error));

};*/