'use strict';

var padLeft = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](function () { padLeft(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { padLeft(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(padLeft, t);

	t.end();
});
