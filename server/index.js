const express = require('express');

const connectDB = require('./database/db');

// helmet secure Express apps
const helmet = require('helmet');

// Connect to database
connectDB();

// Port used by server
const PORT = process.env.PORT || 8000

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
app.use('/api/consultant', require('./routes/consultant'));

// Server running on PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
