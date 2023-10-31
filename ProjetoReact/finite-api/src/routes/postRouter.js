// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { createPost, post } = require('../controllers/postController');

// router.post('/post', post);
router.post('/createPost', createPost);

module.exports = router;