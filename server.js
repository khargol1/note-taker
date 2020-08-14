const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const notes = require('./db/db.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //used to load css and local js for pages

// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });