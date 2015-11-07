module.exports = function(url) {
  return require('child_process').execSync(
    "curl '" + url.replace(/\'/g, "'\\''") + "'",
    {encoding: 'utf8'}
  );
}
