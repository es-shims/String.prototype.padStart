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
	var F = typeof fillString === 'undefined' ? '' : ES.ToString(fillString);
	if (F === '') {
		F = ' ';
	}
	var intMaxLength = ES.ToLength(maxLength);
	if (intMaxLength <= stringLength) {
		return S;
	}
	var fillLen = intMaxLength - stringLength;
	while (F.length < fillLen) {
		var fLen = F.length;
		var remainingCodeUnits = fillLen - fLen;
		F += fLen > remainingCodeUnits ? slice(F, 0, remainingCodeUnits) : F;
	}

	var truncatedStringFiller = F.length > fillLen ? slice(F, 0, fillLen) : F;
	return truncatedStringFiller + S;
};
