# jstransformer-envy-json

[ENVy JSON](http://github.com/zeke/envy-json) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-envy-json/master.svg)](https://travis-ci.org/jstransformers/jstransformer-envy-json)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-envy-json/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-envy-json)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-envy-json/master.svg)](http://david-dm.org/jstransformers/jstransformer-envy-json)
[![NPM version](https://img.shields.io/npm/v/jstransformer-envy-json.svg)](https://www.npmjs.org/package/jstransformer-envy-json)

## Installation

    npm install jstransformer-envy-json

## API

```js
var envyjson = require('jstransformer')(require('jstransformer-envy-json'))

var input = {
  "name": "Hello World!",
  "basicAuth": "$MY_APPLICATION"
}

envyjson.render(input).body
//=> {"name": "Hello World"}
```

## License

MIT
