module.exports = function(url) {
  return require('child_process')
    .execFileSync('curl', ['--silent', '-L', url], {encoding: 'utf8'});
}
