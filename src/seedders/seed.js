const db = require('../utils/database');
const { Users, Negocios, UsersNegocios } = require('../modules');
const initModels = require('../modules/initModels');

initModels();

const users = [
    {
        identificacion: '1331422',
        primerNombre: 'Darwin',
        segundoNombre: 'Alfonso',
        primerApellido: 'Quintero',
        segundoApellido: 'Bravo',
        celular: '123134242',
        correo: 'darwin@gmail.com', 
        password: '12345'
    },
    {
        identificacion: '2131531',
        primerNombre: 'Charith',
        segundoNombre: 'Natalia',
        primerApellido: 'Patiño',
        segundoApellido: 'Duarte',
        celular: '2452424242',
        correo: 'charith@gmail.com', 
        password: '12345'
    }
];

const negocios = [
    {
        nombre: 'Amazon',
        direccion: 'new york',
        celular: '42323131',
        correo: 'amazon@services.com',
        createdBy: 1
    },
    {
        nombre: 'paypal',
        direccion: 'tokio',
        celular: '5324123',
        correo: 'paypa@services.com',
        createdBy: 1
    },
    {
        nombre: "facebook",
        direccion: "New York",
        celular: "+58 65173736713",
        correo: "facebook@services.com",
        createdBy: 2
    },
    {
        nombre: 'Globant',
        direccion: 'Ciudad de Mexico',
        celular: '65318423',
        correo: 'globant@services.com',
        createdBy: 2
    }

];

const users_negocios = [
    {
        userId: 1,
        negocioId: 1, 
    },
    {
        userId: 1,
        negocioId: 2, 
    },
    {
        userId: 2,
        negocioId: 3,
    },
    {
        userId: 2,
        negocioId: 4,
    }
]



db.sync({ force: true })
    .then(()=> {
        console.log('Sincronizando');
        users.forEach(async(user)=> await Users.create(user));

        setTimeout(()=> {
            negocios.forEach(async(negocio)=> await Negocios.create(negocio));
        }, 2000);

        setTimeout(()=> {
            users_negocios.forEach(async(userNegocio)=> await UsersNegocios.create(userNegocio));
        }, 2000);
    })