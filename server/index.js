const express = require('express');
const path = require('path');
const app = express();

// '..' is for index.js being in the server folder
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(9000);