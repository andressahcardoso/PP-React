// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { SelectTotalTime, TotalTime_Week } = require('../controllers/rankingController');

// router.post('/post', post);
router.get('/SelectTotalTime', SelectTotalTime);
router.get('/TotalTime_Week', TotalTime_Week)

module.exports = router;