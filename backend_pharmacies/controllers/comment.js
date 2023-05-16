const Comment = require('../models/comments');


exports.createComment = (req, res, next) => {
    console.log( "voici le message que je recoit :::::::!!!!!");
   // console.log(req.body.comment);
    //const commentObject = (req.body.comment);
    //delete commentObject._id;
    delete req.body.comment._id;
   // console.log(" voici le commentaire que je souhaite enregistrer!:: :::::::::::");
    //console.log(commentObject);
    
    const comment = new Comment({
        comment: req.body.comment,
        userId: req.auth.userId,
        //imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
  
    comment.save()
    .then(() => { res.status(201).json({message: 'Objet enregistré !'})})
    .catch(error => { res.status(400).json( { error })})
 };

 exports.deleteOneComment = (req, res, next) => {
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

exports.getAllComment = (req, res, next) => {

    Comment.find()
        .then(comments => {
           // console.log(comments);
            res.status(200).json(comments);

        })
        
        .catch(error => console.log(error));

};

exports.deleteOneComment = (req, res, next) => {
    Comment.deleteOne({
            _id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'objet supprimé'
        }))
        .catch(() => res.status(400).json({
            error
        }));
};