'use strict';

var padLeft = require('../');
var test = require('tape');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st.throws(function () { padLeft(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st.throws(function () { padLeft(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	require('./tests')(padLeft, t);

	t.end();
});
