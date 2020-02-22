var route = require('express').Router();
var find = require('../models/file_model');
route.post('/get_data', (req, res) => {

    find.find({
        date: {
            $gte: req.body.date_start,
            $lte: req.body.date_end
        }
    }, function (err, result) {
        res.json({
            result: result
        });
    })
});
module.exports = route;