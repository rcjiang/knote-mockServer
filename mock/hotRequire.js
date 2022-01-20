const path = require('path')
const { hotRequire } = require('../src/utils')

module.exports = function (filename) {
  return hotRequire(path.join(__dirname, filename))
}