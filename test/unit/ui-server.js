var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var path = require('path')

var Message = require(path.join(__dirname + '/../../db/models', 'message.js'))

describe('A failing test to test test suite', function() {
  beforeEach(function(){});
  afterEach(function(){});
  it('should fail', function(){ expect(true).to.be.false; })
});

describe('Message Model test suite', function(){
  it ('should be a function', function() {
    Message.should.be.a('function')
  })
})