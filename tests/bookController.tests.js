const should = require('should'),
      sinon = require('sinon');

// Unit test for Book Controller
describe('Book Controller Tests', () => {
   describe('Post', () => {
       it('Should not allow an empty title on Post', () => {
           let Book = function(book){
               this.save = function(){};
           };

           let req = {
               body: {
                   author: 'Bundyfx'
               }
           };

           let res = {
             status: sinon.spy(),
             send: sinon.spy()
           };

           let bookController = require('../controllers/bookController')(Book);

           bookController.post(req, res);

           res.status.calledWith(400).should.equal(true, 'Bad Status ' + res.status.args[0][0]);
           res.send.calledWith('Title is required').should.equal(true);
       })
   });

});