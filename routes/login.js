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

let sessionController = new SessionController();

router.get('/', (req, res, next) => { sessionController.login(req, res); });

module.exports = router;
