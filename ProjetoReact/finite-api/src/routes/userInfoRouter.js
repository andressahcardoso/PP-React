// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { listUserInfo, userPosts } = require('../controllers/userInfoController');

router.post('/userInfo', listUserInfo);
router.post('/userPosts', userPosts)

module.exports = router;