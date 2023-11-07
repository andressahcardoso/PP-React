// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que retorna todos usuários no banco de dados
async function listUsers(req, res) {
    // Preparar o comando de execução no banco
    
        connection.query('SELECT * FROM users', (error, results) => {
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