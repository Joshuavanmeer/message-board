var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// prevents duplicate email addresses
schema.plugin(uniqueValidator, { type: 'not unique' });

module.exports = mongoose.model('user', schema);




