const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/master-console'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/master-console/index.html'));
});
app.listen(process.env.PORT || 8080);
