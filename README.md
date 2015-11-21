# download-file-sync

Ever wanted to write a node script that just downloads a file synchronously? I'm sure you sometimes wish you worked on PHP and just used `file_get_contents('url')`. Yeah it's going to be slow, yeah it won't scale, but that doesn't matter for your little script.

## How to use?

```
npm install download-file-sync --save
```

```javascript
var downloadFileSync = require('download-file-sync');
var content = downloadFileSync('https://github.com/vjeux/download-file-sync');
// '<!DOCTYPE html><html lang="en"...'
```

That's it, now you can get back to writing awesome prototypes ;)

## How does it work

Here's the full implementation:

```javascript
module.exports = function(url) {
  return require('child_process')
    .execFileSync('curl', ['--silent', '-L', url], {encoding: 'utf8'});
}
```

As you can imagine, this is not web scale, but it works!
