const express = require('express');
const especialidade = require('../Model/Especialidade');
const router = express.Router();

// ROTAS
const listarEspecialidade = '/especialidade/listarEspecialidade';
const listarEspecialidadeID = '/especialidade/listarEspecialidade/:id';
const cadEspecialidade = '/especialidade/cadastrarEspecialidade';
const alterarEspecialidade = '/especialidade/alterarEspecialidade';
const excluirEspecialidade = '/especialidade/excluirEspecialidade';

/****** CADASTRAR ESPECIALIDADE *******/
router.post(cadEspecialidade, (req, res) => {
   let { nome_especialidade } = req.body;

   especialidade
      .create({ nome_especialidade })
      .then(() => res.send('Especialidade inserida com sucesso !'));
});

/****** LISTAR ESPECIALIDADE *******/
router.get(listarEspecialidade, (req, res) => {
   especialidade.findAll().then((especialidades) => {
      res.send(especialidades);
   });
});

/****** LISTAR ESPECIALIDADE POR ID *******/
router.get(listarEspecialidadeID, (req, res) => {
   let { id } = req.params;

   especialidade.findByPk(id).then((esp) => {
      const { nome_especialidade } = esp;
      res.send(nome_especialidade);
   });
});

/****** ALTERAR ESPECIALIDADE *******/
router.put(alterarEspecialidade, (req, res) => {
   let { id, nome_especialidade } = req.body;
   especialidade
      .update({ nome_especialidade }, { where: { id } })
      .then(() => res.send('Dados de Especialidade Alterados com Sucesso !'));
});

/****** EXCLUIR ESPECIALIDADE *******/
router.delete(excluirEspecialidade, (req, res) => {
   let { id } = req.body;
   especialidade.destroy({ where: { id } }).then(() => {
      res.send('Especialidade Excluída com Sucesso !');
   });
});

module.exports = router;
