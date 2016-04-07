'use strict'

const express = require('express');
const parts = express.Router();
const db = require('../db/pg');

parts.route('/processors')
  .get(db.getProcessors, (req, res) => {
    res.send(res.rows);
  })

parts.route('/gpus')
  .get(db.getGPUs, (req, res) => {
    res.send(res.rows);
  })

parts.route('/ram')
  .get(db.getRAM, (req, res) => {
    res.send(res.rows);
  })

parts.route('/hd')
  .get(db.getHDs, (req, res) => {
    res.send(res.rows);
  })

parts.route('/motherboards')
  .get(db.getMotherboards, (req, res) => {
    res.send(res.rows);
  })

parts.route('/coolers')
  .get(db.getCoolers, (req, res) => {
    res.send(res.rows);
  })

parts.route('/psus')
  .get(db.getPSUs, (req, res) => {
    res.send(res.rows);
  })

parts.route('/cases')
  .get(db.getCases, (req, res) => {
    res.send(res.rows);
  })

parts.route('/monitors')
  .get(db.getMonitors, (req, res) => {
    res.send(res.rows);
  })

module.exports = parts;