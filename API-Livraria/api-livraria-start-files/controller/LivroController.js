const express = require('express');
const multer = require('multer');

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
   console.log(req.files[0]);
   console.log(req.files[1]);
   console.log(req.body);

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

module.exports = router;
