const multer = require('multer'); // pour faciliter la gestio des requetes http vers notre api

const MIME_TYPES = {
    'image/jpeg': 'jpeg',
    'image/jpg' : 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({ // "multer.disk storage pour dire qu'on va stocké ces informations sur le disck"
    destination: (req, file, callback) => { // " la fonction destination" explique à multer ou ebregistrer le fichier, "callback" est la foction qui lui explique donc, et prend l'argument null pour dire qu'il n'y a pas eu d'erreur, suivi d nom du dossier ou doit etre enregistrer les images 'image'
        callback(null, 'images')
    },
    filename: (req, file, callback) => { // explique à multer le nom de fichier à utiliser
        const name = file.originalname.split(' ').join('_');// split pour retirer l'espace enter le nom d'un fichier et le remplacer par  "_"
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name +Date.now() +'.' + extension);
    }
});

module.exports = multer({storage}).single('image');