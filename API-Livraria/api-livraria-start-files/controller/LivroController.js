const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();
const router = express.Router();

const livro = require('../model/Livro');

/***** MULTER - STORAGE *****/
/** GERENCIA O ARMAZENAMENTO DOS ARQUIVOS **/
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, './uploads/');
   },
   filename: (req, file, cb) => {
      cb(null, Date.now().toString() + '_' + file.originalname);
   },
});

/***** MULTER - FILTER *****/
/** GERENCIA O TIPO DE ARQUIVO QUE PODE SER RECEBIDO **/
const fileFilter = (req, file, cb) => {
   if (
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg' ||
      file.mimetype === 'image/png'
   ) {
      cb(null, true);
   } else {
      cb(null, false);
   }
};

/***** MULTER - UPLOAD *****/
/** EXECUTA O PROCESSO DE ARMAZENAMENTO **/
const upload = multer({
   storage: storage,
   limits: {
      fieldSize: 1024 * 1024 * 5,
   },
   fileFilter: fileFilter,
});

// 'files' é o campo que está mandando os arquivos e o 2 é o limite de arquivos
router.post('/livro/cadastrarLivro', upload.array('files', 2), (req, res) => {
   // console.log(req.files[0]);
   // console.log(req.files[1]);
   // console.log(req.body);

   const { titulo, preco, detalhes, tblCategoriaumId } = req.body;
   const imagen_peq = req.files[0].path;
   const imagen_grd = req.files[1].path;

   livro
      .create({
         titulo,
         preco,
         imagen_peq,
         imagen_grd,
         detalhes,
         tblCategoriaumId,
      })
      .then(() => {
         res.send('DADOS DE LIVRO INSERIDOS COM SUCESSO!');
      });
});

router.get('/livro/listarLivro', (req, res) => {
   livro.findAll().then((livros) => {
      res.send(livros);
   });
});

router.get('/livro/listarLivroCodigo/:id', (req, res) => {
   const { id } = req.params;

   livro.findByPk(id).then((livroID) => {
      res.send(livroID);
   });
});

router.delete('/livro/excluirLivro/:id', (req, res) => {
   const { id } = req.params;

   livro.findByPk(id).then((livro) => {
      const imagens = [livro.imagen_peq, livro.imagen_grd];

      livro
         .destroy({ where: { id } })
         .then(() => {
            for (const imagem of imagens) {
               fs.unlink(imagem, (err) => {
                  err === true
                     ? console.log(`Erro ao excluir a imagem`)
                     : console.log('Imagem excluída com sucesso !');
               });
            }
         })
         .then(() => {
            res.send('Exclusão de livros realizada com sucesso !');
         });
   });
});

router.put('/livro/editarLivro', upload.array('files', 2), (req, res) => {
   const {
      titulo,
      preco,
      detalhes,
      tblCategoriumId: categoria_fk,
      id,
   } = req.body;

   // UPDATE COM IMAGEM
   if (req.files !== '') {
      livro.findByPk(id).then((livro) => {
         let imagens = [livro.imagen_peq, livro.imagen_grd];
         for (const imagem of imagens) {
            fs.unlink(imagem, (err) => {
               err === true
                  ? console.log(`Erro ao excluir a imagem`)
                  : console.log('Imagem excluída com sucesso !');
            });
         }

         imagens[0] = req.files[0].path;
         imagens[1] = req.files[1].path;

         let [imagen_peq, imagen_grd] = [...imagens];

         // Atualização dos dados de livros
         livro
            .update(
               {
                  titulo,
                  preco,
                  detalhes,
                  categoria_fk,
                  imagen_peq,
                  imagen_grd,
               },
               { where: { id } }
            )
            .then(() => {
               res.send('Livro atualizado com sucesso !');
            });
      });
   } else {
      // UPDATE SEM IMAGEM
      livro
         .update(
            {
               titulo,
               preco,
               detalhes,
               categoria_fk,
            },
            { where: { id } }
         )
         .then(() => {
            res.send('Livro atualizado com sucesso !');
         });
   }
});

module.exports = router;
