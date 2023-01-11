const express = require ("express");
const app = express();

const dotenv = require('dotenv');
dotenv.config({path : './config.env'});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('views', 'views');
app.use('/', express.static('public'));
app.use('/', express.static('node_modules'));
app.set('view engine', 'ejs');

const morgan = require('morgan');
app.use(morgan('tiny'));

const routes = require('./routes/router');
app.use(routes);

const PORT =  4000;
app.listen(PORT, ()=>{
    console.log("Le serveur est sur le port " + PORT);
});