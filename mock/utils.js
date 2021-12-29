exports.hotRequire = function (filepath) {
  delete require.cache[require.resolve(filepath)]
  return require(filepath)
}