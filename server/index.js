const express = require('express');

// passport is authentication middleware 
const passport = require('passport');

const configDb = require('./config/database/db');
// config environment variable
require('dotenv').config();

// helmet secure Express apps
const helmet = require('helmet');

// Connect to database
configDb();

// Port used by server
const PORT = process.env.PORT

const app = express();

// helmet used by server
app.use(helmet());

// Init Middleware
app.use(express.json({ extended: false }));

// route test 
app.get('/', (req, res) => {
    res.send({ message: 'Hello to WEMOOV TEAMS /'});
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/auth', require('./routes/auth'));

// Server running on PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
