// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { saveStories, getStories, getStoriesById } = require('../controllers/storiesController');

// router.post('/post', post);
const upload = require('../config/multer');
router.post('/saveStories', upload.single('file'), saveStories);
router.get('/getStories', getStories)
router.post('/getStoriesById', getStoriesById)

module.exports = router;