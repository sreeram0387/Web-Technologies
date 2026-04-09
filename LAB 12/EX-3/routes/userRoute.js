const express = require('express');
const router = express.Router();
const User = require('models/User');

router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

router.delete('/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted');
});

module.exports = router;
