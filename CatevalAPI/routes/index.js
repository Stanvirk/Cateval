const admin = require('./admin');
const data = require('./data');
const eval = require('./eval');
const debug = require('debug')('app.controller.admin');
const router = require('express').Router();

router.use('/admin', admin);
router.use('/data', data);
router.use('/eval', eval);

exports = router;