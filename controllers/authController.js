
const jwt = require('jsonwebtoken');
const credentials = require('../static/credentials.json');

exports.loginPage = (req, res) => {
    res.render('login');
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists in static credentials
        const storedPassword = credentials[email];
        if (!storedPassword) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check if password matches
        if (password !== storedPassword) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Render success page
        res.render('success', { user: { name: email } });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
