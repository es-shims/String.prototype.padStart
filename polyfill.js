'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof String.prototype.padLeft === 'function' ? String.prototype.padLeft : implementation;
};
