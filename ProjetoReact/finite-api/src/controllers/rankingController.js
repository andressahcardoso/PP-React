const connection = require('../config/db');
require("dotenv").config();


async function SelectTotalTime(req, res) {
  
    const query = `
        SELECT T.userId, SUM(T.timeSpent) as totalTime, U.name, U.userName, U.userPicture
        FROM timespent as T
        INNER JOIN users as U ON T.userId = U.Id
        WHERE DATE(T.date) = CURDATE()
        GROUP BY T.userId, U.name, U.userName, U.userPicture
        HAVING totalTime > 120
        ORDER BY totalTime ASC;`;
        
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Erro ao recuperar informações do ranking: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar informações do ranking' });
      }
    
      res.json(results);
    });
}


async function TotalTime_Week(req, res) {
  
    const query = `
        SELECT T.userId, SUM(T.timeSpent) as totalTime, U.name, U.userName, U.userPicture
        FROM timespent as T
        INNER JOIN users as U ON T.userId = U.Id
        WHERE date(now()) > (NOW() - INTERVAL 7 DAY) 
        GROUP BY T.userId, U.name, U.userName, U.userPicture
        HAVING totalTime > 120
        ORDER BY totalTime ASC;`;
        
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Erro ao recuperar informações do ranking: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar informações do ranking' });
      }
    
      res.json(results);
    });
}


module.exports = {
    SelectTotalTime,
    TotalTime_Week
}