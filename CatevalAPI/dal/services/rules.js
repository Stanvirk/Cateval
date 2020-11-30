const { Rule } = require('../schema/rule');
const { RuleGroup } = require('../schema/rule-group');
const debug = require('debug')('app.services.customer');
const BaseService = require('./base');


class RulesService extends BaseService {
    constructor() {
        super();
    }
}

module.exports = RulesService;