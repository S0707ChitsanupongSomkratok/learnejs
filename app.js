const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const port = 3000;

const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'learnejs'
});

conn.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL Database!");
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(port, () => {
    console.log("Server run on localhost:", port);
})