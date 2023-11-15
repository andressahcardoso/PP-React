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

  async function getTimeSpent_SevenDays(req, res) {
    const userId = req.body.id;
    console.log('----------userId :', userId);
  
    const query = `
      SELECT SUM(timeSpent) AS timeSpent
      FROM timespent 
      WHERE date(now()) > (NOW() - INTERVAL 7 DAY) 
      AND userId = ?;
      `;
    
    connection.query(query, [userId], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar os posts: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar os posts' });
      }
    
      res.json(results);
    });
  }


  async function saveTotalPost(req, res) {
    const totalPost = req.body.totalPost;
    const userId = req.body.userId;
    console.log('userId :', userId);
  
    const query = `
      INSERT INTO postviewed (date, totalPost, userId) VALUES(now(), ?, ?)`;
    
    connection.query(query, [totalPost, userId], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar os posts: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar os posts' });
      }
    
      res.json(results);
    });
  }

  async function getTotalPost(req, res) {
    const userId = req.body.id;
    console.log('----------userId :', userId);
  
    const query = `
        SELECT * FROM postviewed WHERE date = CURDATE() and userId = ?`;
    
    connection.query(query, [userId], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar os posts: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar os posts' });
      }
    
      res.json(results);
    });
  }

  async function getTotalPost_SevenDays(req, res) {
    const userId = req.body.id;
    console.log('----------userId :', userId);
  
    const query = `
      SELECT GROUP_CONCAT(totalPost SEPARATOR ',') AS totalPost
      FROM postviewed 
      WHERE date(now()) > (NOW() - INTERVAL 7 DAY) 
      AND userId = ?;
      `;
    
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
    getTimeSpent,
    getTimeSpent_SevenDays,
    saveTotalPost,
    getTotalPost,
    getTotalPost_SevenDays
}