const mysql = require('mysql');

const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "db4free.net",
      user: "restapitest123",
      password: "restapitest123",
      database: "restapitest123",
      connectTimeout: 60000
    },
    listPerPage: 10,
  };

  // Create a connection pool
const pool = mysql.createPool(config.db);

// Function to execute queries
function executeQuery(sql, args = []) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }
      connection.query(sql, args, (error, results) => {
        connection.release(); // Release the connection
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  });
}

module.exports = { executeQuery };
