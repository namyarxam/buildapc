'use strict'

/* Global Requires */
const express    = require('express');
const db         = require('../db/users_pg');
const secret     = process.env.SECRET;
const jwt        = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const users      = express.Router();

/* url/users/... Routes */
users.route('/')
  .get((req, res) => {
    res.json({ data: 'success' });
  })
  .post(db.createUser, (req, res) => {
    res.status(201).json({ data: 'success' });
  })

users.route('/new')
  .get((req, res) => {
    res.json({ data: 'success' });
  })

users.route('/me')
  .post((req, res) => {
    let user = jwt.sign(req.headers.authorization, secret);
    res.json({ data: 'success', agent: user });
  })

users.route('/login')
  .post(db.loginUser, (req, res) => {
    let token = jwt.sign(res.rows, secret);
    res.json({ agent: res.rows, token: token });
  })

/* File Export */
module.exports = users;