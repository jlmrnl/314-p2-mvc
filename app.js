// app.js

const express = require('express');
const authController = require('./controllers/authController');
const app = express();

// Set view engine to EJS
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Route to render index page
app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

// Route to render login page
app.get('/login', authController.loginPage);

// Route to handle login
app.post('/login', authController.login);

// Route to render success page
app.get('/success', (req, res) => {
    res.render('success', { user: req.user });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
