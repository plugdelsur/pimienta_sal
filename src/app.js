const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Servidor funcionando http://localhost:3000');
});

const mainRoutes = require('./routes/main.js');

app.use('/', mainRoutes);