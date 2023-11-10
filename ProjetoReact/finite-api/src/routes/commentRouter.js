// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { listComment, postComment } = require('../controllers/commentController');

router.post('/comment', listComment);
router.post('/postComment', postComment);

module.exports = router;