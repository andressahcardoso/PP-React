// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');


// Create post

async function createPost(request, response) {
    console.log('==========================================================')
    const query = "INSERT INTO posts (Category, UserId, PublishDate, Image, Content, Location) VALUES (?, ?, NOW(), ?, ?, ?)"

    const category = request.body.category

    const query2 = "SELECT Id FROM Categories WHERE name = ?"

    connection.query(query2, [category], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar o post: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar o post' });
      }
  
      if (results.length === 0) {
        return response.status(404).json({ error: 'Post não encontrado' });
      }
  
      categoryId = results[0].Id // Retorna o primeiro resultado (supondo que haverá apenas um resultado)
      console.log('categoryId :', categoryId);

      const params = [
        categoryId,
        request.body.userId,
        request.body.image,
        request.body.content,
        request.body.location
    ];
    connection.query(query, params, (error, result) => {
        if (error) {
          console.error('Erro ao criar o post: ' + error.message);
          return response.status(500).json({ error: 'Erro ao criar o post' });
        }
    
        response.json({ message: 'Post criado com sucesso', postId: result.insertId });
      });
    });


}







// Authentication
// async function post(request, response) {
//     // Preparar o comando de execução no banco
//     const query = "SELECT * FROM post WHERE `ID` = ?";
    
//     // Recuperar credenciais informadas
//     const params = Array(
//         request.body.postId
//     );

//     // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
//     connection.query(query, params, (err, results) => {
//         try {            
//             if (results.length > 0) {                
//                 bcrypt.compare(request.body.password, results[0].password, (err, result) => {
//                     if (err) {                        
//                         return response.status(401).send({
//                           msg: 'Email or password is incorrect!'
//                         });
//                     } else if(result) {
//                         const id = results[0].id_user;
//                         const token = jwt.sign({ userId: id },'the-super-strong-secrect',{ expiresIn: 300 });
//                         results[0]['token'] = token; 
                        
//                         response
//                         .status(200)
//                         .json({
//                             success: true,
//                             message: `Post criado com Sucesso!.`,
//                             data: results
//                         });
//                     }
//                 })
                
//             } else {
//                 response
//                     .status(400)
//                     .json({
//                         success: false,
//                         message: `Não foi possível realizar a remoção. Verifique os dados informados`,
//                         query: err.sql,
//                         sqlMessage: err.sqlMessage
//                     });
//             }
//         } catch (e) { // Caso aconteça algum erro na execução
//             response.status(400).json({
//                     succes: false,
//                     message: "Ocorreu um erro. Não foi criar o post!",
//                     query: err,
//                     sqlMessage: err
//                 });
//         }
//     });
// }

module.exports = {
    createPost,
    // post
}