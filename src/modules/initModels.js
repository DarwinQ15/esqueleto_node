const { Users, Negocios } = require('./index');
const UsersNegocios = require('./usuarios_negocios');
 
const initModels = () => {
    
    Negocios.belongsToMany(Users, { through: "users_negocios" });
    
    Users.belongsToMany(Negocios, { through: "users_negocios" });

    Negocios.belongsTo(Users, { as: "usersNegocios", foreignKey: "created_by" });
    Users.hasMany(Negocios, {as: "negocioUsuarios", foreignKey: "created_by"});

}

module.exports = initModels;