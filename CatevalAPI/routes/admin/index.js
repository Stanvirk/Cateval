const debug = require('debug')('app.controller.admin');
const router = require('express').Router();

const categories = require('./categories')
const questionnaire = require('./questionnaire')
const users = require('./users')

//TODO: should be protected by user manager key and may be some other, like ip or cert
router.use('/categories', categories);
router.use('/questionnaire', questionnaire);
router.use('/users', users);

module.exports = router;