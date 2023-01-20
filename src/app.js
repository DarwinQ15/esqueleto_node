const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const handleError = require('./middlewares/error.middleware');
const initModels = require('./modules/initModels')
const routeUser = require('./routes/users.route');
const routeAuth = require('./routes/auth.route');
const routeNegocio = require('./routes/negocio.route');
const { json } = require('sequelize');

const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());

initModels();

db.authenticate()
    .then(()=> {
        console.log('autenticacion exitosa');
    })
    .catch((error)=> {
        console.log(error)
    })

db.sync({force: true})
    .then(()=> {
        console.log('base de datos sincronizada');
    })
    .then((error)=> console.log(error))


app.get('/', (req, res) => {
    console.log('bienvenido al server');
})

app.use('/api/v1', routeUser);
app.use('/api/v1', routeAuth);
app.use('/api/v1', routeNegocio);

app.use(handleError);

module.exports = app;