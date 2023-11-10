const express = require('express');
// Responsável por lidar com requisições externas
const cors = require('cors');

// Rotas utilizadas para execução da aplicação
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postRouter');
const categoryRouter = require('./routes/categoryRouter');
const listUserRouter = require('./routes/listUserRouter');7
const postCommentRouter = require('./routes/postCommentRouter');
const commetRouter = require('./routes/commentRouter');
const listUserInfo = require('./routes/userInfoRouter')

// Instanciar o express na variável app
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Torna a pasta public "visível" atrávez da URL, para assim mostrar as imagens
app.use('/uploads', express.static(__dirname + '\\public'));

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o recebimento de requests em formato JSON
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);

// Post
app.use('/api', postRouter);

// Category
app.use('/api', categoryRouter);

// List User
app.use('/api', listUserRouter)

// Post Comment
app.use('/api', postCommentRouter)

// Comment
app.use('/api', commetRouter)

// User Info
app.use('/api', listUserInfo)


// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 1903);

module.exports = app;