var mongoose = require('mongoose');

var file = mongoose.model('files', {
    file_url: String,
    name: String,
    embed_url: String,
    iframe_code: String,
    date:Date,
});


mongoose.connect('mongodb+srv://admin:admin@cluster0-lwgpy.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = file;