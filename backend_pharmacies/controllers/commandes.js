const Commandes = require('../models/Commandes');
const fs = require('fs');
const { response } = require('express');




exports.createCommande = (req, res, next) => {
   

    const commandeObject = (req.body.commande);
    delete commandeObject._id;
    
   
    
    delete commandeObject.email;
    delete commandeObject._userId;

   
    
    const commande = new Commandes({
        ...commandeObject,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    commande.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
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
    console.log(req.body.commande);
    const commandeObject = (req.body.commande);
    for(var Object of commandeObject){
    delete Object._id;
   
    
    delete Object.email;
    
    
    delete Object._userId; }
    console.log(commandeObject);
    for(var objet_to_by of commandeObject){
    const commande = new Commandes({
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
    console.log(req.body.commande);
    const commandeObject = (req.body.commande);
    for(var Object of commandeObject){
    delete Object._id;
   
    
    delete Object.email;
    
    
    delete Object._userId; }
    console.log(commandeObject);
    for(var objet_to_by of commandeObject){
    const commande = new Commandes({
        ...objet_to_by,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    commande.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { console.log(error)})
}
/*commande.collection.insertMany(req.body.commande, function (err, docs) {
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
    console.log(req.body.commande);
    const commandeObject = (req.body.commande);
    delete commandeObject._id;
    console.log(commandeObject);
    delete commandeObject._userId;
    
    const commande = new commande({
        ...commandeObject,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    commande.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { console.log(error)})
 };*/


exports.modifyCommande = (req, res, next) => {
    console.log("AAAAAAAAAAAAAAAAAAAAAA");
    console.log(req.body.commande)
    const commandeObject = req.body.commande
console.log("BBBBBBBBBBBBBBBBBBBBB")
console.log(commandeObject);
   // delete commandeObject._userId;
    console.log("CCCCCCCCCCCCCCC")
    Commandes.findOne({

            group_id: req.params.id
        })
        .then(() => {
            console.log("DDDDDDDDDDDDDDDDD");
          
                Commandes.updateOne({
                        _id: req.params.id
                    }, {
                        ...commandeObject,
                        _id: req.params.id
                    })
                    .then(() => res.status(200).json({
                        message: 'Objet modifié!'
                    }))
                    .catch(error => {
                        console.log("EEEEEEEEEEEEEEEEEEEEEEEE");
                        console.log(error)
                    });
            }
        )
        .catch(error => {
            console.log("EEEEEEEEEEEEEEEEEEEEEEEE");
            console.log(error)
        });
};



 
exports.getOneCommande = (req, res, next) => {
    
    Commandes.find({
            drug_id: req.params.id,
            group_id: req.params.group_id
        })
        .then(commande => res.status(200).json(commande))
        .catch(error => res.status(404).json({
            error
        }));
};

exports.deleteOneCommande = (req, res, next) => {
    
    Commandes.deleteOne({
            group_id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'objet supprimé'
        }))
        .catch(() => res.status(400).json({
            error
        }));
};

exports.deleteOneCommande2 = (req, res, next) => {
    
    Commandes.deleteOne({
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

    Commandes.find().populate("drug_id")
        .then(commandes => res.status(200).json(commandes))
        .catch(error => console.log(error));

};
exports.getAllUsersCommande = (req, res, next) => {
  
    Commandes.find({
        _userId: req.params.id
    })
    .then(response => {

              return res.status(200).json(response);

    })
        .catch(error => console.log(error));

};

let user_commande ={ 
nom : '',
prenom : '',
contact :'',
group_id : '',
idList:[],
quartier :'',
ville:'',
date:'',
user_Id:'',
prix_total :''
}
exports.getAllgroupedCommande = (req, res, next) => {
    
    

    Commandes.find({
        group_id: req.params.id
    })
        .then(commandes => {

            user_commande.nom = '',
            user_commande.prenom = '',
            user_commande.contact = '',
            user_commande.group_id = '',
            user_commande.idList= [],
            user_commande.ville='',
            user_commande.quartier='',
            user_commande.date='',
            user_commande.user_Id='',
            user_commande.prix_total =''


            for(var commande of commandes){
                console.log("cccccccccccccccccccccccccccccc")
                console.log(commande)
                user_commande.nom = commande.firstName
                user_commande.prenom = commande.lastName
                user_commande.contact = commande.contact
                user_commande.group_id = commande.group_id
                user_commande.idList.push(commande.drug_id)
                user_commande.ville= commande.ville;
                user_commande.quartier = commande.quartier;
                user_commande.date = commande.createdAt;
                user_commande.user_Id = commande.user_Id;
                user_commande.prix_total = commande.total

            }
            console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIII");
            console.log(commandes);
            console.log(user_commande)
            return res.status(200).json(user_commande);

        })
        .catch(error => console.log(error));

};