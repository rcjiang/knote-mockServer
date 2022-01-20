const hotRequire = require('../hotRequire')

exports.a = {
  path: 'fieldList',
  method: 'GET',
  handle (req) {
    const { query } = req;
    const list = hotRequire('data/field.js')
    const data = query.parent
      ? list.filter(item => item.parentId == query.parent)
      : list
    return data
  }
}

exports.b = {
  path: /field\/\d+/,
  method: 'GET',
  handle (req) {
    const { path } = req;
    const id = path.split('/').pop()
    const list = hotRequire('data/field.js')
    const data = list.find(item => item.id == id)
    return data || {}
  }
}
