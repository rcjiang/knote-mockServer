const { hotRequire } = require('../utils')
exports.a = {
  path: 'catalog',
  method: 'GET',
  handle (req) {
    const { id } = req.query
    const { data } = hotRequire('./data/catalog.js')
    const flatData = flatTree(data)
    const match = flatData.find(item => item.id === id)

    return {
      list: data,
      match
    }
  }
}

function flatTree (data, parent = []) {
  if (!Array.isArray(data)) {
    return []
  }
  return data.reduce((flatList, item) => {
    const { parents = [], children, ...others } = item
    flatList.push({
      ...others,
      parents: parent
    })
    if (children && children.length) {
      flatList.push(flatTree(children), parent.concat(others.id))
    }
    return flatList
  }, [])
}