const router = require('express').Router();
const debug = require('debug')('app.controller.admin.users');
const CustomerAccessor = require('../../../dal/acessors/customer');

const customerAccessor = new CustomerAccessor();

//add new user
router.post('/', async (req, res) => {
    debug(`Incoming create request:\n${JSON.stringify(req.body)}`);

    if (error) {
        debug(`Create request errors:\n${JSON.stringify(error)}`);
        return res.status(400).send(error.details[0].message);
    }

    const newCategory = await customerAccessor
        .create(req.body.name, req.body.description);
    debug(`New entity created:\n${JSON.stringify(newCategory)}`);
    res.send(newCategory);
});

//get user info
router.get('/:code', async (req, res) => {
    debug(`Find by code request:\n${JSON.stringify(req.params)}`);
    const category = await customerAccessor.findByCode(req.params.name);
    if (!category) {
        debug(`No category found`);
        return res.status(404).send('Customer with the given name not found');
    }
    debug(`Entity found:\n${JSON.stringify(category)}`);
    res.send(category);
});

//get user questionnaireds
//disable user

module.exports = router;