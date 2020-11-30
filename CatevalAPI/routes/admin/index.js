 const categories = require('./categories')
 const users = require('./users')
 const debug = require('debug')('app.controller.admin');
 const router = require('express').Router();

// //TODO: should be protected by user manager key and may be some other, like ip or cert
 router.use('/categories', categories);
 router.use('/users', users);

 module.exports = router;