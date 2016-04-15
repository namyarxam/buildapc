'use strict'

/* Global Requires */
const pgp    = require('pg-promise')({});
const bcrypt = require('bcrypt');
const salt   = bcrypt.genSaltSync(10);

/* Database Configuration */
if(process.NODE_ENV === 'production') {
  var cn = process.env.DATABASE_URL;
} else {
  var cn = process.env.DATABASE_URL || {
    host: 'localhost',
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
}

const db = pgp(cn);

/* UserAuth Methods */
function createSecure(email, password, callback) {
  bcrypt.genSalt(password, salt, (err, hash) => {
    bcrypt.hash(password, salt, (err, hash) => {
      callback(email, hash);
    });
  });
}

function createUser(req, res, next) {
  createSecure(req.body.email, req.body.password, saveUser);
  function saveUser(email, hash) {
    db.one('INSERT INTO users (email, password_digest) VALUES ($1, $2) RETURNING *', [email, hash])
      .then((data) => {
        next();
      })
      .catch(() => {
        console.log('error signing up');
        next();
      })
  }
}

function loginUser (req, res, next) {
  let email    = req.body.email;
  let password = req.body.password;
  db.one('SELECT * FROM users WHERE email LIKE $1', [email])
    .then((data) => {
      if (bcrypt.compareSync(password, data.password_digest)) {
        res.rows = data;
        next();
      }
      res.status(401).json({ data: 'password and e-mail do not match'});
      next();
    })
    .catch(() => {
      console.error('error finding users');
    })
}

/* Function Exports */
module.exports.db         = db;
module.exports.pgp        = pgp;
module.exports.loginUser  = loginUser;
module.exports.createUser = createUser;