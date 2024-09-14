const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
});

connection.connect();

connection.query('SELECT * FROM your_table', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

fetch('http://localhost:5000/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

connection.end();
