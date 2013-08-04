var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');

var content;
// First I want to read the file
fs.readFile(__dirname + '/index.html', 'utf8',
function (err, data) {
 if (err) {
    return console.log(err);
  }
  content = data;
});


app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 81;
app.listen(port, function() {
  console.log("Listening on " + port);
});

