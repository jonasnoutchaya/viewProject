const mongoose = require('mongoose');

/*const thingSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  userId: { type: String },
  price: { type: Number },
});*/

const thingSchema = mongoose.Schema({
  titre: { type: String, require:true },
  quantite: { type: Number , require:true },
  vertues: { type: String, require:true },
  composition: { type: String, require:true },
  prix: { type: Number, require:true },
  userId: { type: String, require:true },
  imageUrl: { type: String, require:true },
  categorie: {type: String, require:true },
  
  peremption: {type: String, require:true} 
 
});

module.exports = mongoose.model('Thing', thingSchema);