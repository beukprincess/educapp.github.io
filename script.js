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
    let subject = document.getElementById('subject');
    let header = document.getElementById('header__content');
    let mainScreen = document.getElementById('main__screen');

        if (item == "but__task__manager"){
            mainContent.style.display = 'none';
            taskManagerContent.style.display = 'flex';
            groupContent.style.display = 'none';
            shopContent.style.display = 'none';
    
            mainContent.style.height = '100vh';
            header.style.display = 'none';  
            mainScreen.style.backgroundColor = '#386FA4';
        }
        else if (item == "but__main"){
            mainContent.style.display = 'flex';
            taskManagerContent.style.display = 'none';
            groupContent.style.display = 'none';
            shopContent.style.display = 'none';
    
            taskManagerContent.style.height = '60vh';
            header.style.display = 'flex';
            mainScreen.style.backgroundColor = 'none';
        }
        else if (item == "but__group"){
            mainContent.style.display = 'none';
            taskManagerContent.style.display = 'none';
            groupContent.style.display = 'flex';
            shopContent.style.display = 'none';
    
            groupContent.style.height = '100vh';
            header.style.display = 'none';
            mainScreen.style.backgroundColor = 'none';
        }
        else {
            mainContent.style.display = 'none';
            taskManagerContent.style.display = 'none';
            groupContent.style.display = 'none';
            shopContent.style.display = 'flex';
    
            shopContent.style.height = '100vh';
            header.style.display = 'none';
            mainScreen.style.backgroundColor = 'none';
        }
    
    
}
function selectSubject(){
    console.log("work");
    let subject = document.getElementById('subject');

    
   // if(subject.style.backgroundColor == "red"){
    //    subject.style.backgroundColor = 'green';
    //}
    //else{
    //    subject.style.backgroundColor = 'red';
    //}

}
function closeScreen(){


    let name = document.getElementById('textfield__name').value;
    let surname = document.getElementById('textfield__surname').value;
    let student = document.getElementById('status__student');
    let teacher = document.getElementById('status__teacher');
    let error = "Помилка";
    if(name.length < 4){
        alert(error);
    }
    else if(surname.length < 4){
        alert(error);
    }
    else {
        document.getElementById('register__screen').style.display = 'none';
        document.getElementById('screen').style.display = 'block';
    }
}