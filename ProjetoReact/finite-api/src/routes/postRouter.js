// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { createPost, post, getAllPosts, getCommercePost } = require('../controllers/postController');

// router.post('/post', post);
router.post('/createPost', createPost);
router.get('/posts', getAllPosts);
router.get('/post/commerce', getCommercePost);

module.exports = router;