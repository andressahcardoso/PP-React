// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();

// Buscar posts
async function listUserInfo(request, response) {
    const userId = request.body.userId
    console.log('userId :', userId);

    const query = `SELECT
        u.id,
        u.name,
        u.userName,
        u.userPicture,
        u.description,
        (SELECT COUNT(f1.user_id) FROM follows f1 WHERE f1.user_id = u.id and f1.isFollowed = 1) as following,
        (SELECT COUNT(f2.user_id) FROM follows f2 WHERE f2.follower_id = u.id and f2.isFollowed = 1) as followed
    FROM
        users u
    WHERE u.id = ?;`

    connection.query(query, [userId], (error, results) => {
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

// Buscar posts
async function userPosts(request, response) {
    const userId = request.body.userId
    console.log('userId :', userId);

    const query = `SELECT image FROM posts WHERE UserId = ?`

    connection.query(query, [userId], (error, results) => {
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

module.exports = {
    listUserInfo,
    userPosts
}
