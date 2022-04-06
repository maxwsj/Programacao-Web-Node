const express = require('express');
const app = express();
const router = express.Router();
const medico = require('../model/Medico');

// Rotas
const listarMedico = '/medico/listarMedico';
const listarMedicoID = '/medico/listarMedicoID/:id';
const cadMedico = '/medico/cadastrarMedico';
const alterarMedico = '/medico/alterarMedico';
const excluirMedico = '/medico/excluirMedico';

/****** CADASTRAR MEDICO *******/
router.post(cadMedico, (req, res) => {
   let {
      nome_medico,
      email_medico,
      telefone_medico,
      celular_medico,
      tblEspecialidadeId,
   } = req.body;

   medico
      .create({
         nome_medico,
         email_medico,
         telefone_medico,
         celular_medico,
         tblEspecialidadeId,
      })
      .then(() => res.send('Medico inserido com sucesso !'));
});

/****** LISTAR MEDICO *******/
router.get(listarMedico, (req, res) => {
   medico.findAll().then((medicos) => {
      res.send(medicos);
   });
});

/****** LISTAR MEDICO POR ID *******/
router.get(listarMedicoID, (req, res) => {
   let { id } = req.params;

   medico.findByPk(id).then((esp) => {
      const { nome_medico } = esp;
      res.send(nome_medico);
   });
});

/****** ALTERAR MEDICO *******/
router.put(alterarMedico, (req, res) => {
   let { id, nome_medico, email_medico, telefone_medico, celular_medico } =
      req.body;
   medico
      .update(
         { nome_medico, email_medico, telefone_medico, celular_medico },
         { where: { id } }
      )
      .then(() => res.send('Dados do Medico Alterados com Sucesso !'));
});

/****** EXCLUIR MEDICO *******/
router.delete(excluirMedico, (req, res) => {
   let { id } = req.body;
   medico.destroy({ where: { id } }).then(() => {
      res.send('Medico Excluído com Sucesso !');
   });
});

module.exports = router;
