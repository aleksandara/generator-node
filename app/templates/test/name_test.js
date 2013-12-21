/*global describe, it*/

'use strict';

var expect = require('chai').expect;

var <%= safeSlugname %> = require('../lib/<%= slugname %>.js');

describe('<%= slugname %>', function () {
  it('is awesome', function () {
    var awesome = <%= safeSlugname %>.awesome();

    expect(awesome).to.equal('awesome');
  });
});