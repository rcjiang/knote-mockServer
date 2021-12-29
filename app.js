const express = require('express')
const app = express()
const port = 4000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/enrityList', (req, res) => {
  res.send([
    {
      name: '作品',
    },
    {
      name: '作者',
    },
    {
      name: '体裁',
    }
  ])
})
