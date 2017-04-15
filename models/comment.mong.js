var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    body: { type: String, required: true },
    discussion: { type: Schema.Types.ObjectId, ref: 'Discussion' },
    dates: {
        created:  { type: Date, default: Date.now }
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Comment', schema);