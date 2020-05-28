'use strict';
const express = require('express');
const router = express.Router();

class SessionController {
  login(req, res) {
    const from = req.query.from;
    if (from) {
      res.cookie('loginFrom', from, { expires: new Date(Date.now() + 600000)});
    }
    res.render('login');
  }
}

module.exports = SessionController;