var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
// var validation = require('./validation');

router.post('/user/register/', function(req, res, next) {

    // validation(req.body, function(err, data) {
        // if (err) {
        //     next(err);
        // } else {
        console.log(req.body)
            var detail = new req.fetch({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            })
            detail.save(function(err, data) {
                if (err) {
                  console.log(err)
                    next(err);
                    //res.status(400).json(err.message);
                } else
                    res.json('Data Inserted')
            })
        // }
    // })
});

module.exports = router;
