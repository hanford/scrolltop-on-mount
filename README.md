# scrolltop-on-mount

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Set react component scroll top on mount to top of viewport, mainly useful for wrapping different pages

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo


```js
import withScrollTopHoc from 'scrolltop-on-mount'

class RandomComponent {
  ...
}

export default withScrollTopHoc(RandomComponent)
```
