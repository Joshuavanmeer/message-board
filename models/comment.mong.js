var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    body: { type: String, required: true },
    discussion: { type: Schema.Types.ObjectId, ref: 'Discussion' },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Comment', schema);