'use strict'

/* Global Requires */
if(process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}
const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const path       = require('path');
const favicon    = require('serve-favicon');
const app        = express();
const userRoutes = require('./routes/users');
const partRoutes = require('./routes/parts');

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
app.listen(3000, () => console.log(`Server initialized on // ${new Date()}`));