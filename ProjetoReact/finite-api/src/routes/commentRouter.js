// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { listComment } = require('../controllers/commentController');

router.post('/comment', listComment);

module.exports = router;