var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user.mong.model');
var config = require('../config/database');
var jwt = require('jsonwebtoken');


// verify if the request has a valid webtoken
// attached to it's body
router.use('/', function (req, res, next) {
    console.log('||||=======> hello GET')
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if (err) {
            return res.status(401).json({
                message: 'not authorized to proceed on route',
                error: err
            });
        };
        next();
    });
});



router.get('/', function(req, res, next) {
});

module.exports = router;
