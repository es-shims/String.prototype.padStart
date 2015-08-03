'use strict';

var bind = require('function-bind');
var define = require('define-properties');
var ES = require('es-abstract/es7');
var slice = bind.call(Function.call, String.prototype.slice);

var padLeftShim = function padLeft(maxLength) {
	var O = ES.RequireObjectCoercible(this);
	var S = ES.ToString(O);
	var stringLength = ES.ToLength(S.length);
	var fillString;
	if (arguments.length > 1) {
		fillString = arguments[1];
	}
	var fillStr = typeof fillString === 'undefined' ? '' : ES.ToString(fillString);
	if (fillStr === '') {
		fillStr = ' ';
	}
	var intMaxLength = ES.ToLength(maxLength);
	if (intMaxLength <= stringLength) {
		return S;
	}
	var fillLen = intMaxLength - stringLength;
	var stringFiller = '';
	while (stringFiller.length < fillLen) {
		stringFiller += fillStr;
	}
	if (stringFiller.length > fillLen) {
		stringFiller = slice(stringFiller, -fillLen);
	}

	return stringFiller + S;
};

var boundPadLeftShim = bind.call(Function.apply, padLeftShim);

var boundPadLeft = function padLeft(str, maxLength) {
	ES.RequireObjectCoercible(str);
	var args = [maxLength];
	if (arguments.length > 2) {
		args.push(arguments[2]);
	}
	return boundPadLeftShim(str, args);
};
define(boundPadLeft, {
	shim: function shimPadLeft() {
		define(String.prototype, { padLeft: padLeftShim });
		return String.prototype.padLeft;
	}
});

module.exports = boundPadLeft;
