const { Router } = require('express');
const { registerUser, getUserNegocios } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const routerUser = Router();

routerUser.post('/users', registerUser);
routerUser.get('/users/:id', authenticate, getUserNegocios);

module.exports = routerUser;