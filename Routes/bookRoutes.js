const express = require('express');

let routes = function(Book){

    let bookRouter = express.Router();

    bookRouter.route('/')
        .post((req, res) => {
            let book = new Book(req.body);
            book.save();

            res.status(201).send(book);

        })
        .get((req, res) => {

            let query = {};
            if (req.query.genre)
            {
                query.genre = req.query.genre
            }

            Book.find(query, (err, books) => {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(books);

            });

        });

    bookRouter.route('/:bookId')
        .get((req, res) => {

            Book.findById(req.params.bookId, (err, book) => {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(book);

            });

        });
    return bookRouter;
};

module.exports = routes;