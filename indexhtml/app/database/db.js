// src/config/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root@123',
  database: 'shop_management',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');

  // Test the connection with a simple query
  connection.query('SELECT 1 + 1 AS solution', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return;
    }
    console.log('The solution is: ', results[0].solution);
  });
});

// Export the connection for use in other files
module.exports = connection;