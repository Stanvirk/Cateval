const { Rule } = require('../schema/rule');
const { RuleGroup } = require('../schema/rule-group');
const debug = require('debug')('app.services.customer');
const BaseAccessor = require('./base');


class RulesAccessor extends BaseAccessor {
    constructor() {
        super();
    }
}

module.exports = RulesAccessor;