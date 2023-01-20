const { Router } = require('express');
const { createNegocio, deleteNegocio } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware')

const routerNegocio = Router(); 

routerNegocio.post('/negocio', authenticate, createNegocio);

routerNegocio.delete('/negocio/:id', authenticate, deleteNegocio)

module.exports =  routerNegocio