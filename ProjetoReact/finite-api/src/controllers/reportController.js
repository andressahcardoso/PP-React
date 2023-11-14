const connection = require('../config/db');
require("dotenv").config();



async function TimeSpent(req, res) {
  const time = req.body.time;
  const userId = req.body.userId;
  console.log('userId :', userId);

  const query = `
    INSERT INTO timespent (date, timeSpent, userId) VALUES(now(), ?, ?)`;
  
  connection.query(query, [time, userId], (error, results) => {
    if (error) {
      console.error('Erro ao recuperar os posts: ' + error.message);
      return res.status(500).json({ error: 'Erro ao recuperar os posts' });
    }
  
    res.json(results);
  });
}


async function getTimeSpent(req, res) {
    const userId = req.body.id;
    console.log('----------userId :', userId);
  
    const query = `
        SELECT * FROM timespent WHERE date = CURDATE() and userId = ?`;
    
    connection.query(query, [userId], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar os posts: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar os posts' });
      }
    
      res.json(results);
    });
  }

module.exports = {
    TimeSpent,
    getTimeSpent
}