const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      containerized = require('containerized');

// Checking to determine if this is being executed from with Docker. If so we assume the db name is 'mongodb' else localhost
if (containerized()) {
    var database = 'mongodb'
} else {
    var database = 'localhost'
}

let db;

if (process.env.ENV == 'Test') {
    db = mongoose.connect('mongodb://' + database + '/bookAPI_test');
} else {
    db = mongoose.connect('mongodb://' + database + '/bookAPI');
}


const Book = require('./models/bookModel');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', (req, res) => {
    res.send('welcome to my Book API lol')
});

app.listen(port, () => {
    console.log('running on port: ' + port)
});

module.exports = app;
