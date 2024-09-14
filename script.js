const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '7.tcp.eu.ngrok.io',
  user: 'root',
  password: 'ridnashkola228208',
  database: 'db_ged'
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err.stack);
      return;
    }
    console.log('Successfully connected to MySQL database as id ' + connection.threadId);
  });

connection.query('SELECT * FROM your_table', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

fetch('http://localhost:5000/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

connection.end();

function changePanel(item){
    let mainContent = document.getElementById("main");
    let taskManagerContent = document.getElementById("task__manager");
    let groupContent = document.getElementById("group");
    let shopContent = document.getElementById("shop");
    
    if (item == "but__task__manager"){
        mainContent.style.display = 'none';
        taskManagerContent.style.display = 'block';
        groupContent.style.display = 'none';
        shopContent.style.display = 'none';

        mainContent.style.height = '50vh';
    }
    else if (item == "but__main"){
        mainContent.style.display = 'block';
        taskManagerContent.style.display = 'none';
        groupContent.style.display = 'none';
        shopContent.style.display = 'none';

        taskManagerContent.style.height = '100vh';
    }
    else if (item == "but__group"){
        mainContent.style.display = 'none';
        taskManagerContent.style.display = 'none';
        groupContent.style.display = 'block';
        shopContent.style.display = 'none';

        groupContent.style.height = '100vh';
    }
    else {
        mainContent.style.display = 'none';
        taskManagerContent.style.display = 'none';
        groupContent.style.display = 'none';
        shopContent.style.display = 'block';

        shopContent.style.height = '100vh';
    }
}
function selectSubject(){
    console.log("work");
    
    if(subject.style.backgroundColor == 'rgb(255, 0, 0)'){
        this.style.backgroundColor = 'green';
    }
    else{
        this.style.backgroundColor = 'red';
    }

}