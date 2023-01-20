const { Users } = require('../modules');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

class AuthServices {
    static async authenticate(credencials) {
        try {
            const {correo, password} = credencials;
            const result = await Users.findOne({
                where: {correo}
            })
            if (result) {
                const isValid = bcrypt.compareSync(password, result.password);
                return isValid ? {isValid, result} : isValid
            } else {
                return result;
            }
        } catch (error) {
            throw "ERROR" + error
        }
    };
    static async genToken(data){
        try {
            const token = jwt.sign(data, process.env.SECRET, {
                expiresIn:'10m',
                algorithm:'HS512'
            });
            console.log(token);
            return token
        } catch (error) {
            throw "ERROR" + error
        }
    }
};

module.exports = { AuthServices }