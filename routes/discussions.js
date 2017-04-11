var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user.mong.model');
var Discussion = require('../models/dicussion.mong.model');
var config = require('../config/database');
var jwt = require('jsonwebtoken');


// verify if the request has a valid webtoken
// attached to it's body
router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, config.secret, function (err, decoded) {
        if (err) {
            return res.status(401).json({
                message: 'not authorized to proceed on route',
                error: err
            });
        };
        next();
    });
});


router.post('/new-discussion', function (req, res, next) {

    var discussion = new Discussion({
        title: req.body.title,
        body: req.body.body,
        userId: req.body.userId,
        username: req.body.username,
        comments: req.body.comments
    });
    discussion.save(function (err, discussionResult) {
        if (err) {
            return res.status(500).json({
                type: 'error',
                error: err,
                message: 'it seems something went wrong, please try again'
            });
        }
        res.status(201).json({
            type: 'success',
            discussion: discussionResult,
            message: 'succesfully created a new discussion'
        });
    });

});








module.exports = router;