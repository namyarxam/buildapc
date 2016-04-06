'use strict'

/* Global Requires */
require('dotenv').config();
const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const path       = require('path');
const favicon    = require('serve-favicon');
const app        = express();
const userRoutes = require('./routes/users');

/* App Config */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'public', 'images', 'maxfav.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use('/users', userRoutes);

/* Server Initialization */
app.get('/', (req, res) => res.sendFile('index.html'));
app.listen(3000, () => console.log(`Server initialized on // ${new Date()}`));