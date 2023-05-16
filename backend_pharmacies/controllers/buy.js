const Buy = require('../models/Buy');
const fs = require('fs');





exports.createBuy = (req, res, next) => {
    console.log(" voici le médicament à créer::::::!!!!!!!!");
    console.log(req.body.buy);
    const buyObject = (req.body.buy);
    delete buyObject._id;
    console.log(buyObject);
    delete buyObject._userId;
    
    const buy = new Buy({
        ...buyObject,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    buy.save()
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
 


/* exports.createBuy = (req, res, next) => {
    console.log(" voici le médicament à créer::::::!!!!!!!!");
    console.log(req.body.buy);
    const buyObject = (req.body.buy);
    delete buyObject._id;
    console.log(buyObject);
    delete buyObject._userId;
    for(var objet_to_by of buyObject){
    const buy = new Buy({
        ...objet_to_by,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    buy.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { console.log(error)})
}
/*Buy.collection.insertMany(req.body.buy, function (err, docs) {
    if (err){ 
      return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
      res.status(201).json({message: 'Objet enregistré !'})
    }
  });
 };


/*exports.createBuy = (req, res, next) => {
    console.log(" voici le médicament à créer::::::!!!!!!!!");
    console.log(req.body.buy);
    const buyObject = (req.body.buy);
    delete buyObject._id;
    console.log(buyObject);
    delete buyObject._userId;
    
    const buy = new Buy({
        ...buyObject,
        userId: req.auth.userId,
       // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    buy.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { console.log(error)})
 };*/


exports.modifyBuy = (req, res, next) => {
    const buyObject = req.file ? {
        ...JSON.parse(req.body.buy),
    //    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {
        ...req.body
    };

    delete buyObject._userId;
    Buy.findOne({
            _id: req.params.id
        })
        .then((Buy) => {
            if (Buy.userId != req.auth.userId) {
                res.status(401).json({
                    message: 'Not authorized'
                });
            } else {
                Buy.updateOne({
                        _id: req.params.id
                    }, {
                        ...buyObject,
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

exports.getOneBuy = (req, res, next) => {
    console.log(":::::::::::::::::::::");
    console.log(req.params.id);
    console.log(":::::::::::::::");
    Buy.find({
            user_Id: req.params.id
        })
        .then(buy => res.status(200).json(buy))
        .catch(error => res.status(404).json({
            error
        }));
};

exports.deleteOneBuy = (req, res, next) => {
    Buy.deleteOne({
            _id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'objet supprimé'
        }))
        .catch(() => res.status(400).json({
            error
        }));
};


exports.getAllBuy = (req, res, next) => {

    Buy.find().populate("drug_id")
        .then(buys => res.status(200).json(buys))
        .catch(error => console.log(error));

};