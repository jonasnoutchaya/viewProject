const Thing = require('../models/Thing');
const fs = require('fs');


exports.createThing = (req, res, next) => {
   // console.log(" voici le médicament à créer::::::!!!!!!!!");
   // console.log(req.body.thing);
    const thingObject = (req.body.thing);
    delete thingObject._id;
    //console.log(thingObject);
    delete thingObject._userId;
    const thing = new Thing({
        ...thingObject,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    thing.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
 };


exports.modifyThing = (req, res, next) => {

   /* Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));*/

   const thingObject = req.file ? {
        ...JSON.parse(req.body.thing),
        //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {
        ...req.body
    };

    delete thingObject._userId;
    Thing.findOne({
            _id: req.params.id
        })
        .then((thing) => {
            if (thing.userId != req.auth.userId) {
                res.status(401).json({
                    message: 'Not authorized'
                });
            } else {
                Thing.updateOne({
                        _id: req.params.id
                    }, {
                        ...thingObject,
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

exports.getOneThing = (req, res, next) => {
    console.log("PPPPPPPPPPPPPPP11111");
    console.log(req.params.id);
    console.log(":::::::::::::::");
    Thing.findOne({
            _id: req.params.id
        })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({
            error
        }));
};

exports.deleteOneThing = (req, res, next) => {
    Thing.deleteOne({
            _id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'objet supprimé'
        }))
        .catch(() => res.status(400).json({
            error
        }));
};


exports.getAllThing = (req, res, next) => {

    Thing.find({
        categorie: 1
    })
        .then(things => res.status(200).json(things))
        .catch(error => console.log(error));

};

exports.getAllThing2 = (req, res, next) => {

    Thing.find({
        categorie: 2
    })
        .then(things => res.status(200).json(things))
        .catch(error => console.log(error));

};

exports.getAllThing3 = (req, res, next) => {

    Thing.find({
        categorie: 3
    })
        .then(things => res.status(200).json(things))
        .catch(error => console.log(error));

};
exports.getAllThings = (req, res, next) => {

    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => console.log(error));

};