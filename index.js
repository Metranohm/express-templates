const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(3001, () => {
  console.log('Server is running on port 3001');
})