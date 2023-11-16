// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { likePost, isLiked, listLiked } = require('../controllers/likeController');

router.post('/likePost', likePost);
router.post('/isLiked', isLiked);
router.post('/listLiked', listLiked);

module.exports = router;