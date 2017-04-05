var expect = require('chai').expect;
var app = require('../app/app');

    it ('find number', function () {
        expect(app.findMin([5,4,6,8,-1])).to.eql(-1)

    } );

    it ('find character', function () {
        expect(app.findMin([5,4,6, 's',-1])).to.eql(false)

    } );

