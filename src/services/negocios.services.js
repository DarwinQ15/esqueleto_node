const { Negocios } = require('../modules');
const UsersNegocios = require('../modules/usuarios_negocios');

class NegociosServices {
    static async createNeg(newNegocio){
        try {
            const { nombre, direccion, celular, correo, createdBy } = newNegocio
            const negocio = await Negocios.create({ nombre, direccion, celular, correo, createdBy });
            const negocioId = negocio.id;
            const result = await UsersNegocios.create({ negocioId, userId: createdBy })
            console.log(result);
            return {
                status: 201,
                message: 'Fue creado con exito'
            }
        } catch (error) {
            throw "ERROR " + error
        }
    };

    static async deleteNegocio(id) {
        try {
            const result = await Negocios.destroy({
                where: {id}
            });
            return result
        } catch (error) {
            throw error
        }
    }

};

module.exports = { NegociosServices };