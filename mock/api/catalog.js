const { hotRequire } = require('../utils')
exports.a = {
  path: 'catalog',
  method: 'GET',
  handle (req) {
    const { id } = req.query
    const data = hotRequire('./data/catalog.js')
    const list = data[`data${id}`] || data.example
    return list
  }
}