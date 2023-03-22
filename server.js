require('dotenv').config
const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const fileupload = require('express-fileupload');
const apiRoutes = require('./src/routes');

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifieldTopology: true
});

mongoose.Promise = global.Promise
mongoose.connection.on('error', (erro) => {
    console.log('Erro: ', error.message)
});

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(fileupload());
server.use(express.static(__dirname + '/public'));

server.use('/', apiRoutes)
server.use(process.env.PORT, () => {
    console.log(`Rodando no endereço: ${process.env.BASEURL}`);
});