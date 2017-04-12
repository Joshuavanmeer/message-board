var express = require('express');
var router = express.Router();
var User = require('../models/user.mong.model');
var Discussion = require('../models/discussion.mong.model');
var config = require('../config/database');
var jwt = require('jsonwebtoken');



router.get('/range', function (req, res, next) {
    var skip = Number(req.query.skip);
    var limit = Number(req.query.limit);
    Discussion.find()
        .sort('-dates.created')
        .skip(skip)
        .limit(limit)
        .populate('user', 'username')
        .exec(function (err, docs) {
            if (err) {
                return res.status(401).json({
                    message: 'not authorized to proceed on route',
                    error: err
                });
            }
            res.status(201).json({
                type: 'success',
                discussions: docs,
                message: 'succesfully created a new discussion'
            });
        });
});


router.get('/totalDocs', function (req, res, next) {
    Discussion.find()
        .count(function (err, total) {
            if (err) {
                return res.status(500).json({
                    error: err,
                    message: 'internal server error, could not fullfil request'
                });
            }
            res.status(201).json({
                type: 'success',
                total: total,
                message: 'retrieved total documents'
            });
    });
});


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
    var decodedToken = jwt.decode(req.query.token);
    // decode token, retrieve encoded user data
    // so the user document can be retrived from db
    User.findById(decodedToken.user._id, function(err, userDoc){
        if (err || !userDoc) {
            return res.status(500).json({
                error: err,
                message: 'internal server error, could not fullfil request'
            });
        }
        // save a new discussion and ref to the user document
        var discussion = new Discussion({
            title: req.body.title,
            body: req.body.body,
            comments: req.body.comments,
            user: userDoc
        });
        discussion.save(function (err, discussionResult) {
            if (err) {
                return res.status(500).json({
                    type: 'error',
                    error: err,
                    message: 'it seems something went wrong, please try again'
                });
            }
            // save message to user doc in database
            userDoc.discussions.push(discussion);
            userDoc.save();
            res.status(201).json({
                type: 'success',
                discussion: discussionResult,
                message: 'succesfully created a new discussion'
            });
        });
    });
});



module.exports = router;