var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendfile('/public/index.html', { root: __dirname + '/..' })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});