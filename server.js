'use strict'

/* Global Requires */
const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const path       = require('path');
const favicon    = require('serve-favicon');
const userRoutes = require('./routes/users');
const partRoutes = require('./routes/parts');
const app        = express();

if(process.env.NODE_ENV === 'development') {
  require('dotenv').config();
} 

/* App Config */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'public', 'images', 'maxfav.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use('/users', userRoutes);
app.use('/parts', partRoutes);

/* Server Initialization */
app.get('/', (req, res) => res.sendFile('index.html'));
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server initialized on // ${new Date()}`));