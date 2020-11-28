const router = require('express').Router();
const debug = require('debug')('app.controller.admin.categories');
const validator = require('./validator');
const CategoryService = require('../../../dal/services/category-service');

const categoryService = new CategoryService();

//Categories controller
//  CREATE
router.post('/', async (req, res) => {
    debug(`Incoming create request:\n${JSON.stringify(req.body)}`);
    const { error } = validator.validateCategory(req.body);
    if (error) {
        debug(`Create request errors:\n${JSON.stringify(error)}`);
        return res.status(400).send(error.details[0].message);
    }

    const newCategory = await categoryService
        .create(req.body.code, req.body.description);
    debug(`New entity created:\n${JSON.stringify(newCategory)}`);
    res.send(newCategory);
});

// READ
router.get('', async (req, res) => {
    debug(`A list of all categories were requested`);
    var categories = await categoryService.getList({});
    res.send(categories);
});

router.get('/:code', async (req, res) => {
    debug(`Find by code request:\n${JSON.stringify(req.params)}`);
    const category = await categoryService.findByCode(req.params.code);
    if (!category) {
        debug(`No category found`);
        return res.status(404).send('Category with the given code not found');
    }
    debug(`Entity found:\n${JSON.stringify(category)}`);
    res.send(category);
});

//  UPDATE
router.put('/:code', async (req, res) => {
    debug(`Update request:\n${JSON.stringify(req.body)}`);
    //TODO: should be performed by service layer
    const category = await categoryService.findByCode(req.params.code);
    if (!category) {
        debug(`No category found`);
        return res.status(404).send('Category with the given code not found');
    }

    const { error } = validator.validateCategory(req.body);

    if (error) {
        debug(`Invalid update request:\n${JSON.stringify(error)}`);
        return res.status(400).send(error.details[0].message);
    }
    const newCategory = await categoryService
        .create(
            req.body.code,
            req.body.description || category.description);

    debug(`Updated entity:\n${JSON.stringify(newCategory)}`);
    res.send(newCategory);
});

//  DELETE
router.delete('/:code', async (req, res) => {
    //TODO: should be performed by service layer
    debug(`Delete request ${req.body}`);
    const category = await categoryService.deleteByCode(req.params.code);
    if (!category) {
        debug(`No category found`);
        return res.status(404).send('Course with the given id not found');
    }

    debug(`Deleted entity ${category}`);
    res.send(category);
});


module.exports = router;