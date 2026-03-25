const express = require('express');

const router = express.Router();

// const getTodos = require('../controllers/todo.controller');

router.get('/', (req, res) => {
    res.send('Welcome to the To-Do API!');
});

const { getTodos, createTodos } = require('../controllers/todo.controller');

router.get('/', getTodos);
router.post('/', createTodos);

module.exports = router;
