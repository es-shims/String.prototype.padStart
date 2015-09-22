'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

module.exports = function shimPadLeft() {
	var polyfill = getPolyfill();
	define(String.prototype, { padLeft: polyfill }, { padLeft: function () { return String.prototype.padLeft !== polyfill; } });
	return polyfill;
};
