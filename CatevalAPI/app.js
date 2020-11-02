const express = require('express');
const Joi = require('joi');

//TODO: move configuration to separate file/momdule
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

//TODO: move to DAL.
const categories = [
    { id: 1, code: 'A', description: 'Success' },
    { id: 2, code: 'B', description: 'Partial access' },
    { id: 1, code: 'F', description: 'No context provided' }
];


//TODO: Move to separate module/controller - Admin. Managing categories should be restricted by admin access(token?).

//Categories controller
//  CREATE
app.post('/api/admin/categories', (req, res) => {
    const { error } = validateCategory(req.body);

    if (error)
        return res.status(400).send(error.details[0].message);

    //TODO: should be performed by service layer
    const category = {
        id: categories.length + 1,
        name: req.body.code
    };
    categories.push(category);

    res.send(category);
});

// READ
app.get('/api/admin/categories', (req, res) => {
    res.send(categories);
});

app.get('/api/admin/categories/:code', (req, res) => {
    const category = categories.find(c => c.code === parseInt(req.params.code));
    if (!category)
        //TODO: resource management?
        return res.status(404).send('Category with the given code not found');
    res.send(category);
});

//  UPDATE
app.put('/api/admin/categories/:code', (req, res) => {
    const category = categories.find(c => c.code === parseInt(req.params.code));
    if (!category)
        return res.status(404).send('Category with the given code not found');

    const { error } = validateCategory(req.body);

    if (error)
        return res.status(400).send(error.details[0].message);

    category.code = req.body.code;
    category.description = req.body.description || category.description;
    res.send(category);
});

//  DELETE
app.delete('/api/admin/categories/:code', (req, res) => {
    const category = categories.find(c => c.code === parseInt(req.params.code));
    if (!category)
        return res.status(404).send('Course with the given id not found');

    const index = categories.indexOf(category);
    categories.splice(index, 1);

    res.send(category);
});

//TODO: Validation should be also separated
function validateCategory(category) {
    const schema = Joi.object({
        code: Joi.string()
            .min(1)
            .max(5)
            .required(),
        description: Joi.string()
            .max(255)
            .optional()
    });

    return schema.validate(category);
}

//TODO: app.js should contain only application related stuff. Basically like Startup.cs in .NET apps
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
