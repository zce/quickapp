# quickapp

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> :construction: 一个帮你管理 hap-tools（快应用开发工具）依赖项并封装其编译功能的模块，开箱即用，减少痛苦

## Installation

```shell
$ yarn add quickapp

# or npm
$ npm install quickapp
```

## Usage

```javascript
const quickapp = require('quickapp')
const result = quickapp('zce')
console.log(result)
// => 'zce@zce.me'
```

## API

### quickapp(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## CLI Usage

```shell
$ yarn global add quickapp

# or npm
$ npm install quickapp -g
```

```shell
$ quickapp --help

  Usage: creative <input>

  Options:

    -V, --version  output the version number
    -H, --host     Email host
    -h, --help     output usage information
```

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; zce <w@zce.me> (https://zce.me/)



[travis-image]: https://img.shields.io/travis/zce/quickapp.svg
[travis-url]: https://travis-ci.org/zce/quickapp
[codecov-image]: https://img.shields.io/codecov/c/github/zce/quickapp.svg
[codecov-url]: https://codecov.io/gh/zce/quickapp
[downloads-image]: https://img.shields.io/npm/dm/quickapp.svg
[downloads-url]: https://npmjs.org/package/quickapp
[version-image]: https://img.shields.io/npm/v/quickapp.svg
[version-url]: https://npmjs.org/package/quickapp
[license-image]: https://img.shields.io/npm/l/quickapp.svg
[license-url]: https://github.com/zce/quickapp/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/zce/quickapp.svg
[dependency-url]: https://david-dm.org/zce/quickapp
[devdependency-image]: https://img.shields.io/david/dev/zce/quickapp.svg
[devdependency-url]: https://david-dm.org/zce/quickapp?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
