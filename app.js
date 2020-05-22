///APP Modules________________________________

var express = require('express');
var bodyparser = require('body-parser');
var file_upload = require('express-fileupload');
var path=require('path');
var app = express();



var port =process.env.PORT || 3000;

///APP settings___________________________
mongoose.connect('mongodb_url', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(file_upload());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true,
}));
app.use('/video', express.static(__dirname + '/video'));
app.use('/public', express.static(path.join(__dirname, 'public')));

// TEEEST +1

app.set('views', './views');
app.set('view engine', 'hbs');

app.listen(port, () => {
    console.log('http://localhost:3000')
});


///APP Routes___________________________

app.get('/', require('./routes/main_route'));
app.post('/uploads', require('./routes/upload'));
app.post('/get_data',require('./routes/get_data'));
app.post('/get_dataByID',require('./routes/get_dataByID'));
