# String.prototype.padStart <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES2017 spec-compliant `String.prototype.padStart` shim. Invoke its "shim" method to shim `String.prototype.padStart` if it is unavailable.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://github.com/tc39/ecma262/pull/581).

Most common usage:
```js
var padStart = require('string.prototype.padstart');

assert(padStart('foo', 5, 'bar') === 'bafoo');

padStart.shim();

assert(padStart('foo', 2) === 'foo'.padStart(2));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.com/package/string.prototype.padstart
[npm-version-svg]: http://versionbadg.es/es-shims/String.prototype.padStart.svg
[travis-svg]: https://travis-ci.org/es-shims/String.prototype.padStart.svg
[travis-url]: https://travis-ci.org/es-shims/String.prototype.padStart
[deps-svg]: https://david-dm.org/es-shims/String.prototype.padStart.svg
[deps-url]: https://david-dm.org/es-shims/String.prototype.padStart
[dev-deps-svg]: https://david-dm.org/es-shims/String.prototype.padStart/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/String.prototype.padStart#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/string.prototype.padstart.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/string.prototype.padstart.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/string.prototype.padstart.svg
[downloads-url]: http://npm-stat.com/charts.html?package=string.prototype.padstart
[codecov-image]: https://codecov.io/gh/es-shims/String.prototype.padStart/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/String.prototype.padStart/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/String.prototype.padStart
[actions-url]: https://github.com/es-shims/String.prototype.padStart/actions
