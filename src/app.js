const express = require('express');
const app = express();
const path = require('path')

/* app.use(express.static(path.join(__dirname, 'public')));*/
app.use(express.static("./public"));

/*Es el Engine Template*/
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(3030, () => {
    console.log('Servidor funcionando http://localhost:3030');
});

const mainRoutes = require('./routes/mainRoutes.js');
const productsRoutes = require('./routes/productsRoutes.js');


app.use('/', mainRoutes);
app.use('/menu', productsRoutes);


