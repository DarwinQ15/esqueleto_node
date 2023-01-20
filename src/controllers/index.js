const { userLogin } = require("./auth.controller");
const { registerUser, getUserNegocios } = require("./users.controller");
const { createNegocio, deleteNegocio } = require('./negocios.controller')

module.exports = {
    registerUser,
    userLogin,
    createNegocio,
    getUserNegocios,
    deleteNegocio
}