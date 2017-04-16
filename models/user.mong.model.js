var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imgSrc: { type: String, required: true},
    dates: {
        created:  { type: Date, default: Date.now }
    },
    discussions: [{ type: Schema.Types.ObjectId, ref: 'Discussion' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
});

// prevents duplicate email addresses
schema.plugin(uniqueValidator, { type: 'not unique' });

module.exports = mongoose.model('User', schema);




