/* Importação do pacote express */
const express = require('express');
const { listen } = require('express/lib/application');

/*Instancia executavel do express */
const app = express();

// Recebe dados no formato json()
app.use(express.json());

// encode a url para ela poder receber e tratar os dados json()
app.use(express.urlencoded({ extended: true }));

/*Importação da conexão com o banco de dados*/
const connection = require('./database/database');

/* importação das models */
const Livro = require('./model/Livro');
const Categoria = require('./model/Categoria');

//importando o controller com as rotas
const categoriaController = require('./controller/CategoriaController');
const livroController = require('./controller/LivroController');

//o / chama o localhost, no caso a raíz e depois dela é chamado a rota
app.use('/', categoriaController);
app.use('/', livroController);

/*Servidor de requisições da aplicação */
app.listen(3007, () => {
  console.log('Servidor Rodando na Porta 3007 - URL: http://Localhost:3007');
});
