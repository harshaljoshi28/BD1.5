const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

app.get('/fullName', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fulllName = firstName.concat(' ').concat(lastName);
  res.send(fulllName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let date = month.concat(', ').concat(year);
  res.send(date);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
