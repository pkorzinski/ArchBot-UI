var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var path = require('path');
var db = require(__dirname + '/../../db/config.js')
var Message = require(path.join(__dirname + '/../../db/models', 'message.js'))

xdescribe('A failing test to test test suite', function() {
  // auto failing test to check if test suite is running properly
  beforeEach(function(){});
  afterEach(function(){});
  it('should fail', function(){ expect(true).to.be.false; })
});

describe('Message Model test suite', function(){
  var localhost;
  beforeEach(function() {
    // uses mongoose.connections property to check if local mongo is running
    localhost = db.connections[0]._hasOpened;
  });
  it ('should have a live local server', function(){
    localhost.should.equal(true)
  })
  it ('should be a function', function() {
    Message.should.be.a('function')
  })
  it ('should create a message in database', function(){
    // saves test message then removes all messages from local mongo
    var today = Date.now();
    var testMsg = new Message({
      user: 'test-suite',
      text: 'this is a test message',
      channel: 'test-suite',
      timestamp: today
    }).save();
    var test = Message.find({user: 'test-suite'}).exec(function(err, results){
      results[0].user.should.equal('test-suite')
      Message.remove({}, function(err, results){});
    })
  })
})
