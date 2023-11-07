// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { listUsers } = require('../controllers/listUserController');

// router.post('/post', post);
router.get('/listUser', listUsers);

module.exports = router;