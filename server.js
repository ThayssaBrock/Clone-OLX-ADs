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