const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config/db');
const app = express();

const PORT = process.env.PORT || 5000;

// Connect DB
connectDB();

//Init Middleware
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));