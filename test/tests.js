'use strict';

module.exports = function (padLeft, t) {
	t.test('normal cases', function (st) {
		st.equal(padLeft('a', 3, 'b'), 'bba', 'string pads left with single character');
		st.equal(padLeft('abc', 3, 'd'), 'abc', 'string already of maximum length noops');
		st.equal(padLeft('abc', -3, 'd'), 'abc', 'string already larger than maximum length noops');
		st.equal(padLeft('cd', 3, 'ab'), 'acd', 'string with maximum length equal to length plus filler length, pads');
		st.equal(padLeft('abc'), 'abc', 'absent maximum length is noop');
		st.equal(padLeft('a', 3), '  a', 'absent fillStr defaults to a space');
		st.equal(padLeft('ed', 6, null), 'nulled', 'non-string fillStr gets stringified');

		st.end();
	});

	t.test('truncated fill string', function (st) {
		st.equal(padLeft('a', 2, 'bc'), 'ba', 'truncates at the provided max length');

		st.end();
	});

	t.test('exceptions', function (st) {

		st.end();
	});
};
