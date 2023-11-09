const connection = require('../config/db');
require("dotenv").config();


// --------------- Create post -----------------

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
      console.log('------------image :', request.file.filename);

      const params = [
        categoryId,
        request.body.userId,
        // Pega o fileName do arquivo para inserir no BD.
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


// -------------- Get posts --------------------

var fs = require('fs');

// Função que rcebe dois argumentos: base64str, que é uma string em formato base64 a ser decodificada, e fileName, que é o nome do arquivo onde a decodificação será salva.
function base64_decode(base64str,fileName){
  var bitmap = Buffer.from(base64str, 'base64');

  // O conteúdo decodificado é escrito no arquivo especificado por fileName.
  fs.writeFileSync(fileName+'',bitmap, 'binary', function (err){
    if(err){
      console.log('Conversao com erro');
    }
  } );
}

// Função responsável pela conexão com o banco, a fim de retornar as informações do post.
async function getAllPosts(req, res) {
  const query = `
  SELECT
    posts.ID AS post_id,
    posts.image AS post_image,
    posts.content AS post_content,
    posts.userID,
    posts.location,
    users.userName as name,
    users.email as email
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

    results.forEach((post) => {
      if (post.post_image) {
        const base64Data = post.post_image;
        // Define o nome do arquivo.
        const fileName = `post_${post.post_id}.jpeg`; 
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
      posts.content AS post_content,
      posts.userID,
      posts.location,
      users.userName as name,
      users.email as email
    FROM
      posts
    JOIN
      users ON posts.userId = users.ID and users.personTypeId = 2
    ORDER BY posts.PublishDate DESC
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