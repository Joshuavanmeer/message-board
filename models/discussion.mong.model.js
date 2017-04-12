var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: { type: Number, required: true },
    dates: {
        created:  {type: Date, default: Date.now}
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Discussion', schema);