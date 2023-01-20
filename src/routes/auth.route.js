const { Router } = require('express');
const { userLogin } = require('../controllers');

const routeAuth = Router();

routeAuth.post('/auth/login', userLogin);

module.exports = routeAuth