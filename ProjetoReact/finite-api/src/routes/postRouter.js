// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
// Importar as funções (processamento da requisição) do controller
const { createPost, post, getAllPosts, getCommercePost } = require('../controllers/postController');
const router = Router();
const upload = require('../config/multer');

// router.post('/post', post);
router.post('/createPost', upload.single('file'), createPost);
router.get('/posts', getAllPosts);
router.get('/post/commerce', getCommercePost);

module.exports = router;