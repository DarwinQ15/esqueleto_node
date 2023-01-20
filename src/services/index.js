const { userServices } = require('../services/users.services');
const { AuthServices } = require('./auth.services');
const { NegociosServices } = require('./negocios.services');

module.exports = {
    userServices,
    AuthServices,
    NegociosServices
}