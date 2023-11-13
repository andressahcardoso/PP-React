const connection = require('../config/db');
require("dotenv").config();


// ----------------- Category posts -------------------

// Consultar todos os posts com JOIN para obter informações do autor
async function getCategory(req, res) {
  const categoryName = req.body.titleFeed;
  console.log('----------categoryName :', categoryName);

  function categoryId() {
    switch(categoryName){
      case 'Diversos':
        return 6
      case 'Músicas':
        return 7
      case 'Atividades e Esportes':
        return 8
      case 'Natureza e Paisagem':
        return 9
      case 'Educação':
        return 10
      }
  }

  const id = categoryId();
  console.log('id :', id);

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
      users ON posts.userId = users.ID and posts.category = ?
    ORDER BY posts.PublishDate DESC
  `;
  
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Erro ao recuperar os posts: ' + error.message);
      return res.status(500).json({ error: 'Erro ao recuperar os posts' });
    }
  
    res.json(results);
  });
}

module.exports = {
    getCategory
}