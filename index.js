'use strict'

const envy = require('envy-json')

exports.name = 'envy-json'
exports.outputFormat = 'json'

exports.render = function (str) {
  const output = envy(str)
  return JSON.stringify(output)
}
