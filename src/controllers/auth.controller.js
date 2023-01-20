const { AuthServices } = require('../services');

const userLogin = async(req, res, next) => {
    try {
        const credencials = req.body;
        const result = await AuthServices.authenticate(credencials);
        if(result) {
            const { id, identificacion, primerNombre, PrimerApellido, celular, correo } = result.result;
            const user = { id, identificacion, primerNombre, PrimerApellido, celular, correo  };
            const token = AuthServices.genToken(user);
            user.token = token;
            res.json({ ...user })
        }else {
            res.status(400).json({message: 'informacion invalida'})
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'contraseña invalida'
        })
    }
};

module.exports = { userLogin }