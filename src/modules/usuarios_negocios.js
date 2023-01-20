const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const { Users, Negocios } = require('./index')
 
const UsersNegocios = db.define('users_negocios', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
            model: Users,
            key: 'id'
        }
    },
    negocioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'negocio_id',
        references: {
            model: Negocios,
            key: 'id'
        }
    },
}, {
    timestamps: false
});

module.exports = UsersNegocios;