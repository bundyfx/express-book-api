const should = require('should'),
    request = require('supertest'),
    app = require('../index.js'),
    mongoose = require('mongoose'),
    Book = mongoose.model('Book'),
    agent = request.agent(app);

describe('Book CRUD Test', function(){
    it('Should allow a book to be posted and return a Read and _id property', function(done){
        let bookPost = { title:'new Book', author:'Flynn', genre: 'Fiction' };

        agent.post('/api/books')
            .send(bookPost)
            .expect(200)
            .end(function(err, results){
                results.body.read.should.equal(false);
                results.body.should.have.property('_id');
                done()
            })

    });

    afterEach(function(done){
        Book.remove().exec();
        done();
    })
});