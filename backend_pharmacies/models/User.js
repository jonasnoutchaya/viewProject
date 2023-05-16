const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    firstName: { type :String, required: true },
    lastName: { type: String, require: true },
    contact: { type: Number, require:true, unique: true},
    email: { type :String , required: true, unique : true},
    password :{ type: String, required: true, unique: true},
   // phone: { type: String, required:true}
    
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);