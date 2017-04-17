const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser');


const db = mongoose.connect('mongodb://mongodb/bookAPI');
const Book = require('./models/bookModel');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);
// app.use('/api/authors', authorRouter);

app.get('/', (req, res) => {
    res.send('welcome to my Book API lol')
});

app.listen(port, () => {
    console.log('running on port: ' + port)
});
