const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const livraisonSchema = mongoose.Schema({
    
        drug_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Thing' },
        number: Number,
        group_id :String,
       
    
    user_Id: { type: String, require: true },
    contact: { type: Number, require},
    firstName: { type: String, require: true},
    lastName: { type: String, require: true},
    pays: { type: String, require: true},
    ville: { type: String, require: true},
    mode_payemantphy :{type: Boolean, require: true},
    mode_payemant :{type: String, require: true},
    total :{type: Number, require:true},
    livrer:{type: Boolean,require: true},
    
   
}, 

{ timestamps: true });


livraisonSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Livraison', livraisonSchema);