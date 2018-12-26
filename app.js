const express = require('express');
const path = require('path');
const morgan = require('morgan');

const { mongoose } = require('./db.js');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json()); //Before the module "bodyparser.json()" was used

//Routes
app.use('/api/user', require('./routes/user.routes'));

//Satic files
app.use(express.static(path.join(__dirname, 'public')));

//Start server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});