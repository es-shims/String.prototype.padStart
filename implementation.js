'use strict';

var bind = require('function-bind');
var ES = require('es-abstract/es7');
var slice = bind.call(Function.call, String.prototype.slice);

module.exports = function padLeft(maxLength) {
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
		stringFiller = slice(stringFiller, 0, fillLen);
	}

	return stringFiller + S;
};
