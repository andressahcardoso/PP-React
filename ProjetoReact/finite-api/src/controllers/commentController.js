// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();

// Buscar posts
async function listComment(request, response) {
    const postID = request.body.post_id
    console.log('postID :', postID);

    const query = `SELECT
    comments.Id AS comment_id,
    comments.userId AS comment_userId,
    comments.content AS comment_content,
    posts.Content,
    posts.image,
    U.userPicture,
    U.name
FROM
    comments
INNER JOIN
users AS U ON U.id = comments.userId
JOIN
posts ON posts.ID = comments.postId and comments.postId = ?
ORDER BY comments.publishDate DESC`

    connection.query(query, [postID], (error, results) => {
        try {
            if (!error) { // Se não houver erro
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuários com sucesso!',
                    data: results
                });
            } else { // Retorno com informações de erros
                response.status(400).json({
                    success: false,
                    message: `Não foi possível retornar os usuários.`,
                    query: error.sql,
                    sqlMessage: error.sqlMessage
                });
            }
        } catch (error) { // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                error: e
            });
        }
    });
}

// Retorno informações do usuário.
async function userComment(request, response) {
    const postID = request.body.post_id
    console.log('postID :', postID);

    const query = `SELECT
    comments.Id AS comment_id,
    comments.userId AS comment_userId,
    comments.content AS comment_content,
    posts.Content,
    posts.image,
    U.userPicture
FROM
    comments
INNER JOIN
users AS U ON U.id = comments.userId
JOIN
posts ON posts.ID = comments.postId and comments.postId = ?
ORDER BY comments.publishDate DESC`

    connection.query(query, [postID], (error, results) => {
        try {
            if (!error) { // Se não houver erro
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuários com sucesso!',
                    data: results
                });
            } else { // Retorno com informações de erros
                response.status(400).json({
                    success: false,
                    message: `Não foi possível retornar os usuários.`,
                    query: error.sql,
                    sqlMessage: error.sqlMessage
                });
            }
        } catch (error) { // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                error: e
            });
        }
    });
}

// Função que cria um novo usuário 
async function createComment(request, response) {
    // Preparar o comando de execução no banco
    const query = "INSERT INTO comments(userId, postId, content, publishDate) VALUES (?, ?, ?, NOW());";

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.UserID,
        request.body.PostID,
        request.body.Comment
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                .status(201)
                .json({
                    success: true,
                        message: `Sucesso! Usuário cadastrado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

module.exports = {
    listComment,
    createComment,
    userComment
}
