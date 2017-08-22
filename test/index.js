// npm packages
const fs = require('fs');
const tap = require('tap');
const path = require('path');
const request = require('supertest');

// our packages
const app = require('../src');

// read template from file
const template = fs.readFileSync(path.join(__dirname, '..', 'src', 'template.html')).toString();

// simple test
tap.test('Should get main page', t => {
  request(app).get('/').end((err, res) => {
    if (err) {
      throw err;
    }

    t.equal(res.text, template, 'Should return correct html');
    t.end();
  });
});
