const Sequelize = require('sequelize');

const connection = require('../database/database');

const Especialidade = connection.define('tbl_especialidade', {
   nome_especialidade: {
      type: Sequelize.STRING(100),
      allowNull: false,
   },
});

/*Executar a criação da tabela no Banco de Dados*/
// Especialidade.sync({ force: true }); // Força a criação da tabela

//exportação da tabela Categoria para conseguir utilizar nos outros arquivos
module.exports = Especialidade;
