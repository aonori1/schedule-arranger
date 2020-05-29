'use strict';
var SessionController = require('../Controller/SessionController');

const express = require('express');
const router = express.Router();


let sessionController = new SessionController();

router.get('/', (req, res, next) => { sessionController.login(req, res); });

module.exports = router;
