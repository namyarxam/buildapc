'use strict';
const pg = require('pg');
if(process.env.NODE_ENV === 'production') {
  var config = process.env.DATABASE_URL;
} else {
  var config = process.env.DATABASE_URL || {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME.
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  };
}

let getProcessors = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM processors ORDER BY processor_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getGPUs = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM gpus ORDER BY gpu_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getRAM = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM memory ORDER BY memory_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getHDs = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM hds ORDER BY hd_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getMotherboards = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM motherboards ORDER BY motherboard_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getCoolers = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM coolers ORDER BY cooler_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getPSUs = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM psus ORDER BY psu_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getCases = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM cases ORDER BY case_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getMonitors = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM monitors ORDER BY monitor_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getHeadphones = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM headphones ORDER BY headphone_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getKeyboards = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM keyboards ORDER BY keyboard_id DESC;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

let getMice = (req, res, next) => {
  pg.connect(config, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err })
    }
    client.query('SELECT name, img_url, price, description FROM mice ORDER BY mouse_id;', (err, results) => {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      res.rows = results.rows;
      next();
    });
  });
}

module.exports.getProcessors   = getProcessors;
module.exports.getGPUs         = getGPUs;
module.exports.getRAM          = getRAM;
module.exports.getHDs          = getHDs;
module.exports.getMotherboards = getMotherboards;
module.exports.getCoolers      = getCoolers;
module.exports.getPSUs         = getPSUs;
module.exports.getCases        = getCases;
module.exports.getMonitors     = getMonitors;
module.exports.getHeadphones   = getHeadphones;
module.exports.getKeyboards    = getKeyboards;
module.exports.getMice         = getMice;
