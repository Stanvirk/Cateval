const categories = require('./categories')
const debug = require('debug')('app.controller.admin');
const router = require('express').Router();

router.use('/categories', categories)

module.exports = router;