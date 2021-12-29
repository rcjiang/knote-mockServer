const { hotRequire } = require('../utils')
exports.a = {
  path: 'entityList',
  method: 'GET',
  handle (req) {
    const list = hotRequire('./data/entity.js')
    return list
  }
}