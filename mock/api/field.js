const { hotRequire } = require('../utils')
exports.a = {
  path: 'fieldList',
  method: 'GET',
  handle (req) {
    const { query } = req;
    const list = hotRequire('./data/field.js')
    const data = query.parent
      ? list.filter(item => item.parentId == query.parent)
      : list
    return data
  }
}