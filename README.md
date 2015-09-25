# String.prototype.padLeft <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![Build Status][travis-svg]][travis-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

[![browser support][testling-svg]][testling-url]

An ES7 spec-compliant `String.prototype.padLeft` shim. Invoke its "shim" method to shim `String.prototype.padLeft` if it is unavailable.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec proposal](https://github.com/ljharb/proposal-string-pad-left-right).

Most common usage:
```js
var padLeft = require('string.prototype.padleft');

assert(padLeft('foo', 5, 'bar') === 'bafoo');

padLeft.shim();

assert(padLeft('foo', 2)) === 'foo'.padLeft(2));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.com/package/string.prototype.padleft
[npm-version-svg]: http://vb.teelaun.ch/es-shims/String.prototype.padLeft.svg
[travis-svg]: https://travis-ci.org/es-shims/String.prototype.padLeft.svg
[travis-url]: https://travis-ci.org/es-shims/String.prototype.padLeft
[deps-svg]: https://david-dm.org/es-shims/String.prototype.padLeft.svg
[deps-url]: https://david-dm.org/es-shims/String.prototype.padLeft
[dev-deps-svg]: https://david-dm.org/es-shims/String.prototype.padLeft/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/String.prototype.padLeft#info=devDependencies
[testling-svg]: https://ci.testling.com/es-shims/String.prototype.padLeft.png
[testling-url]: https://ci.testling.com/es-shims/String.prototype.padLeft
[npm-badge-png]: https://nodei.co/npm/string.prototype.padleft.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/string.prototype.padleft.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/string.prototype.padleft.svg
[downloads-url]: http://npm-stat.com/charts.html?package=string.prototype.padleft
