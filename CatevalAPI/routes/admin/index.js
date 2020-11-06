const categories = require('./categories')
const router = require('express').Router();

router.use('/categories', categories)

module.exports = router;