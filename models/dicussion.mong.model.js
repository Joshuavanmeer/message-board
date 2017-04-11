var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    username: { type: String, required: true },
    comments: { type: Number, required: true }
});


module.exports = mongoose.model('Discussion', schema);