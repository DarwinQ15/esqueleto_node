const { Users, UsersNegocios } = require('../modules');
const Negocios = require('../modules/negocios.modules');

class UserServices {
    static async create (newUser) {
        try {
            const result = await Users.create(newUser)
            return result
        } catch (error) {
            throw error
        }
    };
    static async getAllNegocios(id){
        try {
            const result = await Users.findAll({
                where: { id },
                attributes: ['id', 'primerNombre'],
                include: {
                    model: Negocios,
                    attributes: ['id', 'nombre', 'direccion', 'celular', 'correo']
                }
            });
            return result
        } catch (error) {
            throw "ERROR" + error
        }
    };
}

module.exports = {UserServices};