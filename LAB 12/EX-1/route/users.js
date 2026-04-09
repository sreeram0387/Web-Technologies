const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' }
];

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).send('User not found');
    user.name = req.body.name;
    res.json(user);
});

router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send('User deleted');
});

module.exports = router;
