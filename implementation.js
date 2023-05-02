'use strict';

var callBound = require('call-bind/callBound');

var RequireObjectCoercible = require('es-abstract/2022/RequireObjectCoercible');
var ToLength = require('es-abstract/2022/ToLength');
var ToString = require('es-abstract/2022/ToString');

var $strSlice = callBound('String.prototype.slice');

module.exports = function padLeft(maxLength) {
	var O = RequireObjectCoercible(this);
	var S = ToString(O);
	var stringLength = ToLength(S.length);
	var fillString;
	if (arguments.length > 1) {
		fillString = arguments[1];
	}
	var filler = typeof fillString === 'undefined' ? '' : ToString(fillString);
	if (filler === '') {
		filler = ' ';
	}
	var intMaxLength = ToLength(maxLength);
	if (intMaxLength <= stringLength) {
		return S;
	}
	var fillLen = intMaxLength - stringLength;
	while (filler.length < fillLen) {
		var fLen = filler.length;
		var remainingCodeUnits = fillLen - fLen;
		filler += fLen > remainingCodeUnits ? $strSlice(filler, 0, remainingCodeUnits) : filler;
	}

	var truncatedStringFiller = filler.length > fillLen ? $strSlice(filler, 0, fillLen) : filler;
	return truncatedStringFiller + S;
};
