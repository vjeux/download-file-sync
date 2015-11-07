module.exports = function(url) {
  return require('child_process')
    .execFileSync('curl', [url], {encoding: 'utf8'});
}
