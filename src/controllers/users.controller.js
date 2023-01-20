const { UserServices } = require("../services/users.services");

const registerUser = async(req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Faltan datos.'
        })
    }
};

const getUserNegocios = async(req, res, next) => {
    try {
        const { id } = req.params;
        const negocios = await UserServices.getAllNegocios(id);
        console.log(negocios);
        res.status(200).json(negocios);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'ERROR' + error,
        })
    }
};

module.exports = {
    registerUser,
    getUserNegocios
}