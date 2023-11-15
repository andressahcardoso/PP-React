// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { TimeSpent, getTimeSpent, getTimeSpent_SevenDays, saveTotalPost, getTotalPost, getTotalPost_SevenDays } = require('../controllers/reportController');

// router.post('/post', post);
router.post('/saveTimeSpent', TimeSpent);
router.post('/TimeSpent', getTimeSpent)
router.post('/getTimeSpent_SevenDays', getTimeSpent_SevenDays)
router.post('/saveTotalPost', saveTotalPost)
router.post('/getTotalPost', getTotalPost)
router.post('/getTotalPost_SevenDays', getTotalPost_SevenDays)

module.exports = router;