const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/rand', (req, res) => {
  res.render('random');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/contact', (req, res) => {
  res.render('contact');
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})