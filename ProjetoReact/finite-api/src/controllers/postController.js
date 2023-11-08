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
    const query = "INSERT INTO posts (Category, UserId, PublishDate, Image, Content, Location) VALUES (?, ?, NOW(), ?, ?, ?)"

    // Pega o Id da categoria que o usuário selecionou.
    const category = request.body.category

    const query2 = "SELECT Id FROM Categories WHERE name = ?"

    connection.query(query2, [category], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar categoria: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar categoria' });
      }
  
      if (results.length === 0) {
        return response.status(404).json({ error: 'Categoria não encontrada' });
      }

      // Retorna o primeiro resultado (supondo que haverá apenas um resultado)
      const categoryId = results[0].Id 
      console.log('categoryId :', categoryId);
      console.log('------------image :', request.file.filename);

      const params = [
        categoryId,
        request.body.userId,
        request.file.filename,
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

var fs = require('fs');
const path = require('path');

const outputDirectory = 'src/temp/';

// Certifica-se de que o diretório de saída exista
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true }); // Cria diretórios pai, se necessário.
}

function base64_decode(base64str,fileName){
  var bitmap = Buffer.from(base64str, 'base64');

  fs.writeFileSync(fileName+'',bitmap, 'binary', function (err){
    if(err){
      console.log('Conversao com erro');
    }
  } );
}


// Consultar todos os posts com JOIN para obter informações do autor
async function getAllPosts(req, res) {
  const query = `
    SELECT
      posts.ID AS post_id,
      posts.image AS post_image,
      posts.content AS post_content
    FROM
      posts
    JOIN
      users ON posts.userId = users.ID and users.personTypeId = 1
    ORDER BY posts.PublishDate DESC
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao recuperar os posts: ' + error.message);
      return res.status(500).json({ error: 'Erro ao recuperar os posts' });
    }


    // Loop through the results and decode/save the images
    results.forEach((post) => {
      if (post.post_image) {
        const base64Data = post.post_image;
        const fileName = `post_${post.post_id}.jpeg`; // Define o nome do arquivo, você pode ajustá-lo conforme necessário.
        base64_decode(base64Data, fileName);
      }
    });

    res.json(results);
  });
}

// Consultar todos os posts com JOIN para obter informações do autor
async function getCommercePost(req, res) {
  const query = `
    SELECT
      posts.ID AS post_id,
      posts.image AS post_image,
      posts.content AS post_content
    FROM
      posts
    JOIN
      users ON posts.userId = users.ID and users.personTypeId = 2
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao recuperar os posts: ' + error.message);
      return res.status(500).json({ error: 'Erro ao recuperar os posts' });
    }

    res.json(results);
  });
}



module.exports = {
    createPost,
    getAllPosts,
    getCommercePost
}