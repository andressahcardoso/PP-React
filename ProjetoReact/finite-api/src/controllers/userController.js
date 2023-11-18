/**
 INFORMAÇÕES DO CONTROLLER

 1. Executa funções assíncronas que retornam uma Promise que é resolvida com um valor de retorno;
 2. Parâmetro request (requisição): é o pedido que um cliente (usuário) realiza a nosso servidor;
 3. Parâmetro response (resposta): é a resosta que o servidor envia ao cliente (usuário);
 4. Com a variável connection que possui as configurações do banco de dados, utilizamos a função query para realizar os comandos de gerenciamento do banco de dados;
 5. Validamos o retorno da requisição, caso tenha algum erro
 6. Retornamos as informações em formato JSON com chaves e valores para o client
 7. Try/Catch: utilizado para tratar erros que podem acontecer dentro do sistema

*/

// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que retorna todos usuários no banco de dados
async function listUsers(request, response) {
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM users', (resultserr, ) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuarios com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os usuários.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}


// Função que retorna todos usuários no banco de dados
async function listUsersById(request, response) {
    // Preparar o comando de execução no banco
    const id = 55
    console.log('==========id :', id);

    const query2 = `SELECT 
        users.name AS name,
        users.userName AS userName,
        users.userPicture AS userPicture
        FROM users WHERE users.id = ?`

    connection.query(query2, [id], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar categoria: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar categoria' });
      }
  
      if (results.length === 0) {
        return response.status(404).json({ error: 'Categoria não encontrada' });
      }})
}


// Função que cria um novo usuário
async function storeUser(request, response) {
    // Preparar o comando de execução no banco
    const query1 = 'INSERT INTO users(name, userName, email, userPicture, password, personTypeId, status, themeDefinition) VALUES(?, ?, ?, ?, ?, ?, ?, ?);';
    const query2 = 'INSERT INTO timequestion(userId, time_24h, time_week) VALUES(LAST_INSERT_ID(), ?, ?);'

    // Recuperar os dados enviados na requisição
    const userPicture = 'foto usuário';
    const personTypeId = request.body.person === 'Pessoa Física' ? 1 : 2;
    const status = 1;

    const params1 = [
        request.body.name,
        request.body.userName,
        request.body.email,
        userPicture,
        bcrypt.hashSync(request.body.password, 10),
        personTypeId,
        status,
        request.body.theme
    ];

    const params2 = [
        request.body.value,
        request.body.value2
    ];

    // Executa as duas ações no banco e valida os retornos para o client que realizou a solicitação
    connection.beginTransaction(function (err) {
        if (err) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível cadastrar usuário!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            });
            return;
        }

        connection.query(query1, params1, function (err, results1) {
            if (err) {
                connection.rollback(function () {
                    response.status(400).json({
                        success: false,
                        message: "Não foi possível realizar o cadastro. Verifique os dados informados",
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
                });
                return;
            }

            connection.query(query2, params2, function (err, results2) {
                if (err) {
                    connection.rollback(function () {
                        response.status(400).json({
                            success: false,
                            message: "Não foi possível realizar o cadastro. Verifique os dados informados",
                            query: err.sql,
                            sqlMessage: err.sqlMessage
                        });
                    });
                    return;
                }

                connection.commit(function (err) {
                    if (err) {
                        connection.rollback(function () {
                            response.status(400).json({
                                success: false,
                                message: "Não foi possível realizar o cadastro. Verifique os dados informados",
                                query: err.sql,
                                sqlMessage: err.sqlMessage
                            });
                        });
                        return;
                    }

                    response.status(201).json({
                        success: true,
                        message: "Sucesso! Usuário cadastrado.",
                        data: results1
                    });
                });
            });
        });
    });
}


// Função que atualiza o usuário no banco
async function updateUser(request, response) {
    // Preparar o comando de execução no banco
    const query = `UPDATE users
        SET name = ?, userName = ?, description = ?, userPicture = ?
        WHERE id = ?;`;

    // Recuperar os dados enviados na requisição respectivamente
    console.log('request.body.name :', request.body.name);
    const params = Array(
        request.body.name,
        request.body.userName,
        request.body.description, 
        request.file.filename,
        request.body.userId
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
    console.log('params :', params);
    console.log('query :', query);
        try {
            if (results.affectedRows > 0) {
                response.status(200).json({
                    success: true,
                    message: `Sucesso! Usuário atualizado.`,
                    data: results
                });
            } else {
                response.status(400).json({
                    success: false,
                    message: `Não foi possível realizar a atualização. Verifique os dados informados`,
                    query: err,
                    sqlMessage: err
                });
            }
        } catch (e) {
            response.status(400).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível atualizar usuário!",
                query: err,
                sqlMessage: err
            });
        }
    });

}

// Função que remove usuário no banco
async function deleteUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM users WHERE `id_user` = ?";

    // Recebimento de parametro da rota
    const params = Array(
        request.params.id
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário deletado.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível deletar usuário!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}




module.exports = {
    listUsers,
    storeUser,
    updateUser,
    deleteUser,
    listUsersById
}