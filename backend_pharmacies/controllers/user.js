

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // json web token

const User = require('../models/User');

exports.signup =( req,res,next)=>{
  
    
   
    bcrypt.hash(req.body.password, 10)
        .then( hash =>{
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                contact: req.body.contact,
                email: req.body.email,
                password: hash
            });
            user.save()
              .then(()=> res.json({message : 'utilisateur créé'}))
              .catch (error  => console.log(error));
        })
        .catch(error => console.log(error));
};

exports.getOneUser = (req, res, next) => {
    //console.log(":::::::::::::::::::::");
   // console.log(req.params.id);
    //console.log(":::::::::::::::");
    User.findOne({
            _id: req.params.id
        })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({
            error
        }));
};
exports.login = (req, res, next) => {
  //  console.log(req.body.email);
   // console.log(req.body.password);
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Paire login/mot de passe incorrecte' });
                    }
                    res.status(200).json({
                        userConnected:{
                        userId: user._id,
                        firstName: user.firstName },
                        
                        token: jwt.sign(
                            { 
                                userId: user._id
                           },
                            
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h'}
                        )

                        
                    });
                   
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
 };

 exports.getAllUsers = (req, res, next) => {

    User.find()
        .then(users => res.status(200).json(users))
        .catch(error => console.log(error));

};
exports.deleteOneUser = (req, res, next) => {
    User.deleteOne({
            _id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'utilisateur  supprimé'
        }))
        .catch(() => res.status(400).json({
            error
        }));
};
