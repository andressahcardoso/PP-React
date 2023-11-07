// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { getCategory } = require('../controllers/categoryController');

// router.post('/post', post);
router.post('/category', getCategory);

module.exports = router;