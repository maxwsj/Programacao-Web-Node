const express = require('express');
const { listen } = require('express/lib/application');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const connection = require('./database/database');

const Medico = require('./Model/Medico');
const Especialidade = require('./Model/Especialidade');

const medicoController = require('./controller/MedicoController');
const especialidadeController = require('./controller/EspecialidadeController');

app.use('/', medicoController);
app.use('/', especialidadeController);

app.listen(3007, () => {
   console.log('Servidor Rodando na Porta 3007 - URL: http://Localhost:3007');
});
