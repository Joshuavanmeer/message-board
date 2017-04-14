var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    dates: {
        created:  { type: Date, default: Date.now }
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
});


module.exports = mongoose.model('Discussion', schema);