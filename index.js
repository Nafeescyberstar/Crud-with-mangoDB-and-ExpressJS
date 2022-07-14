require('dotenv').config();
const express = require('express');
const routes = require('./routes/routes');
const path = require('path')

const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
var flash = require('express-flash')
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json());
app.use('/', routes);
app.listen(3000, () => {
    console.log(`server started at ${3000}`)
})