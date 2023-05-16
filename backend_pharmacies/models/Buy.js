const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const buySchema = mongoose.Schema({
    
        drug_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Thing' },
        number: Number,
        group_id :String,
       
    
    user_Id: { type: String, require: true },
    
   
}, 
{ timestamps: true });


buySchema.plugin(uniqueValidator);


module.exports = mongoose.model('buy', buySchema);