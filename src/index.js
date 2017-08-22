const fs = require('fs');
const path = require('path');
const express = require('express');

// read template from file
const template = fs.readFileSync(path.join(__dirname, 'template.html')).toString();

// init app
const app = express();
// init route
app.get('*', (req, res) => res.send(template));
// export server
module.exports = app;
