module.exports = [
  {
    parentId: 1,
    id: 1,
    fieldName: '作者',
    valueType: 'int',
    sourceType: 'table'
  },
  {
    parentId: 1,
    id: 2,
    fieldName: '创作日期',
    valueType: 'date',
    sourceType: 'input'
  },
  {
    parentId: 1,
    id: 3,
    fieldName: '体裁',
    valueType: 'int',
    sourceType: 'key-value'
  },
  {
    parentId: 1,
    id: 4,
    fieldName: '主题',
    valueType: 'string',
    sourceType: 'collect'
  },
]
