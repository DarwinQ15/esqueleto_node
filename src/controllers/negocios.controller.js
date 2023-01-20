const { NegociosServices } = require('../services');

const createNegocio = async(req, res, next) => {
    try {
        const newNegocio = req.body;
        const result = await NegociosServices.createNeg(newNegocio);
        res.status(201).json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'No se puedo crear el negocio' + error,
          })
    }
};


const deleteNegocio = async(req, res, next) => {
    try {
        const { id } = req.params;
        const result = await NegociosServices.deleteNegocio(id);
        res.status(200).json(result)
    } catch (error) {
        throw "ERROR" + error
    }
}

module.exports = {
    createNegocio,
    deleteNegocio
}