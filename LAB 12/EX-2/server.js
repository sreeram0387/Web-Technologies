const express = require('express');
const app = express();

app.use(express.json());

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};

const authMiddleware = (req, res, next) => {
    console.log('Auth middleware executed');
    next();
};

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/profile', authMiddleware, (req, res) => {
    res.send('Profile Page');
});

app.get('/chain',
    (req, res, next) => {
        console.log('Middleware 1');
        next();
    },
    (req, res, next) => {
        console.log('Middleware 2');
        next();
    },
    (req, res) => {
        res.send('Middleware Chain Completed');
    }
);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
