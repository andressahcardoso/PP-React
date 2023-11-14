// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { TimeSpent, getTimeSpent } = require('../controllers/reportController');

// router.post('/post', post);
router.post('/saveTimeSpent', TimeSpent);
router.post('/TimeSpent', getTimeSpent)

module.exports = router;