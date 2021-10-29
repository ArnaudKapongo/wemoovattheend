const express = require('express');
const app = express();

// passport is authentication middleware 
const passport = require('passport');

// initiazing of passport
app.use(passport.initialize());
require('./config/passport/passport')(passport); 

const configDb = require('./config/database/db');
// config environment variable
require('dotenv').config();

// helmet secure Express apps
const helmet = require('helmet');

// Connect to database
configDb();


// Port used by server
const PORT = process.env.PORT

// helmet used by server
app.use(helmet());

app.get('/', (req, res) => {
    res.send({ message: 'hello'});
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
