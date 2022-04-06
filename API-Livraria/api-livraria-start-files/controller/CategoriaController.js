const express = require('express');

// Recebe o Model
const categoria = require('../Model/Categoria');

//configuração das rotas
const router = express.Router();

//definição das rotas

//ROTA DE INSERÇÃO DE CATEGORIA (VERBO POST)
/* Métodos do verbo da rota: 
1 - a rota em si
2 - a ação que a rota deve executar (arrow function ou funções anônimas) */
router.post('/categoria/cadastrarCategoria', (req, res) => {
   let { nome_categoria } = req.body;

   categoria
      .create(
         // Recebe dois parametros
         // Primeiro é um objeto json()
         // { campo do banco de dados : variável que carrega o valor }
         { nome_categoria }

         // Segundo são os dados
      )
      .then(() => res.send('dados de categoria inseridos com sucesso!'));

   //   console.log(req.body);
   //   res.send("rota de inserção de categoria");
});

//ROTA DE LISTAGEM GERAL DE CATEGORIA
router.get('/categoria/listarCategoria', (req, res) => {
   categoria.findAll().then((categorias) => {
      res.send(categorias);
   });
   //   res.send("rota de listagem geral de categoria");
});

//ROTA DE LISTAGEM POR ID DE CATEGORIA (VERBO HTTP: PUT)
router.get('/categoria/listarCategoria/:id', (req, res) => {
   let { id } = req.params;

   categoria.findByPk(id).then((cat) => {
      const { nome_categoria } = cat;
      res.send(nome_categoria);
   });
});

//ROTA DE ALTERAÇAO  DE CATEGORIA
router.put('/categoria/alterarCategoria', (req, res) => {
   let { id, nome_categoria } = req.body;
   categoria
      .update({ nome_categoria }, { where: { id } })
      .then(() => res.send('Dados de Categoria Alterados com Sucesso !'));
});

//ROTA DE EXCLUSÃO DE CATEGORIA
router.delete('/categoria/excluirCategoria', (req, res) => {
   let { id } = req.body;
   categoria.destroy({ where: { id } }).then(() => {
      res.send('Categoria Excluída com Sucesso !');
   });
});

//exportação para ser utilizado em outros arquivos, router é mais fácil pois ele já pode ser chamado para
//chamar todas as rotas
module.exports = router;
