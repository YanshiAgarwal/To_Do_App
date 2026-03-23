const express = require('express');

const router = express.Router();

const getTodos = require('../controllers/todo.controller');

router.get('/', (req, res) => {
    res.send('Welcome to the To-Do API!');
});

module.exports = router;
