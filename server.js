var express = require('express');
var app = express();

app.use("/app", express.static("app"));
app.use("/bower_components", express.static("bower_components"));
app.use("/dist", express.static("dist"));

app.get('/*', function (req, res) {
  res.sendfile('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
