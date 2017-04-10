var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user.mong.model');
var config = require('../config/database');
var jwt = require('jsonwebtoken');



router.post('/register', function (req, res, next) {
    var newUser = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });
    newUser.save(newUser, function (err, result) {
        if (err) {
            var errorMessage = '';
            if (err.errors.email.kind === 'not unique') {
                errorMessage = 'it seems this email is already in use'
            }
            return res.status(500).json({
                type: 'error',
                error: err,
                message: errorMessage
            });
        }
        res.status(201).json({
            type: 'success',
            result: result,
            message: 'succesfully created a new account'
        });
    });
});




router.post('/login', function (req, res, next) {
    User.findOne({ email: req.body.email }, function (err, userDoc) {
        if (err) {
            return res.status(500).json({
                message: 'failed to retrieve user, please try logging in again',
                error: err
            });
        }
        // if no user found with these credentials or credentials are invalid
        if (!userDoc || !bcrypt.compareSync(req.body.password, userDoc.password)) {
            return res.status(401).json({
                message: 'user credentials are invalid',
                type: 'error',
                error: err
            });
        }
        var jsonToken = jwt.sign({ user: userDoc }, config.secret, { expiresIn: 7200 } );
        return res.status(200).json({
            message: 'You were logged in succesfully',
            type: 'success',
            token: jsonToken,
            user: {
                name: userDoc.name,
                username: userDoc.username,
                email: userDoc.email,
                userId: userDoc._id
            }
        });
    });
});




module.exports = router;