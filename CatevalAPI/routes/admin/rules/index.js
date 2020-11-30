const router = require('express').Router();
const debug = require('debug')('app.controller.admin.categories');
const validator = require('./validator');
const RulesService = require('../../../dal/services/rules');

const rulesService = new RulesService();


module.exports = router;