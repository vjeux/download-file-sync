module.exports = function(url) {
  return require('child_process')
    .execFileSync('curl', ['-L', url], {encoding: 'utf8'});
}
