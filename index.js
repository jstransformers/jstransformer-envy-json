'use strict'

var envy = require('envy-json')

exports.name = 'envy-json'
exports.outputFormat = 'json'

exports.render = function (str) {
  var output = envy(str)
  return JSON.stringify(output)
}
