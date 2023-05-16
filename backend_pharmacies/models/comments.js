const mongoose= require('mongoose');



const commentSchema= mongoose.Schema({
    comment: {type: String, require: true},
    userId: { type: String },
});

module.exports =  mongoose.model('Comment', commentSchema )