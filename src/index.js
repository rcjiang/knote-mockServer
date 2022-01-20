const fs = require('fs')
const path = require('path');
const { hotRequire } = require('./utils')
const API_MAP = new Map();

// 模拟api
function mock (req, res) {
  const { path, method } = req
  console.log(API_MAP)
  const api = [...API_MAP.values()].find(
    item => item.method === method && item.pathRegexp.test(path)
  )
  if (!api) {
    res.status(404)
    res.send('Not found')
    return
  }

  const { handle, path: definePtah, file } = api
  const apiDesc = `method: ${method},\npath: ${definePtah},\nat file: ${file}`
  if (typeof handle !== 'function') {
    res.status(500)
    res.send(
      `Define Error: the "handle" required a function!\n${apiDesc}`
    )
    return
  }

  Promise.resolve(handle(req)).then(data => {
    res.status(200)
    res.send(data)
  }).catch(err => {
    res.status(500)
    res.send(
      `Runtime Error\n${apiDesc}\n${err}`
    )
  })
}

function watchApiFolder (folder) {
  fs.watch(folder, { recursive: true}, (eventType, filename) => {
    registerApi(path.join(folder, filename), true)
  })
}

function loadAPiByFolder (folder) {
  fs.readdir(folder, (err, files) => {
    if (err) {
      console.warn(err)
      return
    }
    files.forEach(filename => {
      registerApi(path.join(folder, filename))
    })
  })
}

function registerApi (filename, noCache = false) {
  if (path.extname(filename) !== '.js') {
    return;
  }
  let config
  try {
    config = noCache ? hotRequire(filename) : require(filename)
  } catch(e) {
    console.warn(`register api fail: ${filename}`)
    return
  }
  const configs = parseApiConfig(config, filename)
  configs.forEach(item => {
    const key = `${item.method}-${item.pathRegexp.toString()}`
    API_MAP.set(key, item)
  })
}

function parseApiConfig (config, filename) {
  const isSingle = ['path', 'handle'].every(key => 
    Object.prototype.hasOwnProperty.call(config,key))

  const configs = isSingle ? [config] : Object.values(config)

  return configs.map(item => {
    let { method = 'GET', path } = item
    let pathRegexp = path
    if (typeof path === 'string' && !path.startsWith('/')) {
      path = '/' + path
      pathRegexp = new RegExp(`^${path}$`, 'i')
    }
    return {
      ...item,
      method: method.toUpperCase(),
      pathRegexp,
      file: filename
    }
  }).filter(item => item.pathRegexp instanceof RegExp)
}

// 执行加载动作
function loadMockApi (folder = './api') {
  const folderPath = path.resolve(folder)
  console.log(folderPath)
  loadAPiByFolder(folderPath)
  watchApiFolder(folderPath)
}

module.exports = {
  mock,
  loadMockApi
}
