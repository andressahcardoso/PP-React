const connection = require('../config/db');
require("dotenv").config();



async function saveStories(req, res) {
    const time = parseInt(req.body.time, 10);

    let query = `
      INSERT INTO stories (userId, location, image, startDate, endDate, time)
      VALUES (?, ?, ?, NOW(), NOW() + INTERVAL ? MINUTE, ?)
    `;
  
    // Se o tempo for maior que 60, assumimos que são horas

    const isHours = time > 11 && time !== 30;
    const timeValue = isHours ? time * 60 : time;
  
    const params = [
      req.body.userId,
      req.body.location,
      req.file.filename,
      timeValue,
      time
    ];
  
    
  connection.query(query, params, (error, results) => {
    if (error) {
      console.error('Erro ao recuperar os stories: ' + error.message);
      return res.status(500).json({ error: 'Erro ao recuperar os stories' });
    }
  
    res.json(results);
  });
}



async function getStories(req, res) {

    let query = `
        SELECT U.name, U.userPicture, U.userName, S.id, S.location, S.image, S.startDate
        FROM stories S
        INNER JOIN users U
        WHERE U.id = S.userId and endDate >= NOW()
        ORDER BY S.startDate DESC;
    `;
  
    
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao recuperar os stories: ' + error.message);
      return res.status(500).json({ error: 'Erro ao recuperar os stories' });
    }
  
    res.json(results);
  });
}


async function getStoriesById(req, res) {

    const id = req.body.id

    let query = `
        SELECT U.name, U.userPicture, U.userName, S.id, S.location, S.image, S.startDate
        FROM stories S
        INNER JOIN users U
        WHERE U.id = S.userId and S.id = ? and endDate >= NOW();
    `;
  
    
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Erro ao recuperar os stories: ' + error.message);
      return res.status(500).json({ error: 'Erro ao recuperar os stories' });
    }
  
    res.json(results);
  });
}

module.exports = {
    saveStories,
    getStories,
    getStoriesById
}