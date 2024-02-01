'use strict';

var should = require('chai').should();
var primeaicore = require('../');

describe('#versionGuard', function() {
  it('global._primeaicore should be defined', function() {
    should.equal(global._primeaicore, primeaicore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      primeaicore.versionGuard('version');
    }).should.throw('More than one instance of primeaicore');
  });
});
