var route = require('express').Router();
var find = require('../models/file_model');
route.post('/get_dataByID', (req, res) => {

    find.findById(req.body.id, function (err, result) {
        res.json({
            result: result
        });
    })
});


module.exports = route;