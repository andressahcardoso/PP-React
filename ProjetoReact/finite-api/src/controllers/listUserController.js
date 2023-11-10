const { request } = require('../app');
const connection = require('../config/db');

// ---------------- Lista de usuários ------------------

// Função que retorna todos usuários no banco de dados
async function listUsers(req, res) {
  const userId = req.body.userId
  console.log('=====================userId :', userId);
  connection.query('SELECT * FROM users WHERE id <> ?', [userId],  (error, results) => {
    if (error) {
      console.error('Erro ao recuperar os posts: ' + error.message);
      return res.status(500).json({ error: 'Erro ao recuperar os posts' });
    }
        
  res.json(results);
  });
}

module.exports = {
    listUsers
}