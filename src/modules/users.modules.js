const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const Users = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
    },
    identificacion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    primerNombre: {
        type: DataTypes.STRING,
        field: 'primer_nombre',
        allowNull: false
    },
    segundoNombre: {
        type: DataTypes.STRING,
        field: 'segundo_nombre',
        allowNull: false
    },
    primerApellido: {
        type: DataTypes.STRING,
        field: 'primer_nombre',
        allowNull: false
    },
    segundoApellido: {
        type: DataTypes.STRING,
        field: 'segundo_apellido',
        allowNull: false
    },
    celular: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: (user, options) => {
            const { password } = user;
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash
        }
    }
});

module.exports = Users;