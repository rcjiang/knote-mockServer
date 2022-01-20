const express = require('express')
const path = require('path')
const { mock, loadMockApi } = require('./src/index.js')

const port = 4000
const basePath = path.resolve('./mock/api')
const mockPath = '/api'
const info = `mock path: ${mockPath}\nload data from ${basePath}`

const app = express()

app.get('/', (req, res) => {
  res.send(info)
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}\n${info}`)
})

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(mockPath, (req, res) => {
  mock(req, res)
})

loadMockApi(basePath)
