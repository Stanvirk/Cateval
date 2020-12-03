const router = require('express').Router();
const debug = require('debug')('app.controller.admin.categories');
const validator = require('./validator');
const RulesAccessor = require('../../../dal/acessors/rules');

const rulesAccessor = new RulesAccessor();


module.exports = router;