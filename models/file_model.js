var mongoose = require('mongoose');

var file = mongoose.model('files', {
    file_url: String,
    name: String,
    embed_url: String,
    iframe_code: String,
    date:Date,
});

module.exports = file;
