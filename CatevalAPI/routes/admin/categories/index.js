const router = require('express').Router();
const validator = require('./validator');

//TODO: move to DAL.
const categories = [
    { id: 1, code: 'A', description: 'Success' },
    { id: 2, code: 'B', description: 'Partial access' },
    { id: 1, code: 'F', description: 'No context provided' }
];

//Categories controller
//  CREATE
router.post('/', (req, res) => {
    const { error } = validator.validateCategory(req.body);

    if (error)
        return res.status(400).send(error.details[0].message);

    //TODO: should be performed by service layer
    const category = {
        id: categories.length + 1,
        code: req.body.code,
        description: req.body.description
    };
    categories.push(category);

    res.send(category);
});

// READ
router.get('', (req, res) => {
    res.send(categories);
});

router.get('/:code', (req, res) => {
    //TODO: should be performed by service layer
    const category = categories.find(c => c.code === req.params.code);
    if (!category)
        //TODO: resource management?
        return res.status(404).send('Category with the given code not found');
    res.send(category);
});

//  UPDATE
router.put('/:code', (req, res) => {
    //TODO: should be performed by service layer
    const category = categories.find(c => c.code === req.params.code);
    if (!category)
        return res.status(404).send('Category with the given code not found');

    const { error } = validator.validateCategory(req.body);

    if (error)
        return res.status(400).send(error.details[0].message);

    category.code = req.body.code;
    category.description = req.body.description || category.description;
    res.send(category);
});

//  DELETE
router.delete('/:code', (req, res) => {
    //TODO: should be performed by service layer
    const category = categories.find(c => c.code === req.params.code);
    if (!category)
        return res.status(404).send('Course with the given id not found');

    const index = categories.indexOf(category);
    categories.splice(index, 1);

    res.send(category);
});


module.exports = router;