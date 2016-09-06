var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('A failing test to test test suite', function() {
  beforeEach(function(){});
  afterEach(function(){});
  it('should fail', function(){ expect(true).to.be.false; })
});