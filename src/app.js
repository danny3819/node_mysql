const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection')
const app = express();
//setings
const puerto = process.env.PORT || 3000;
app.set('port', puerto );
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//importando rutas
const rutaComprador = require('./routes/comprador.js')

//middlewares
app.use(morgan('dev'));

app.use(myconnection(mysql,{
host: 'localhost',
user: 'root',
password: '100516',
database: 'myapp',
port:3306

}, 'single'));

app.use(express.urlencoded({extended:false}))

//routes

app.use('/', rutaComprador)

//static files

app.use(express.static(path.join(__dirname,'public')))

//iniciando servidor
app.listen(app.get('port'), ()=>{
console.log("escuchando en puerto " + puerto);
});