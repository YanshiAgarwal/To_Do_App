const express = require('express');

const router = express.Router();

// const getTodos = require('../controllers/todo.controller');

const { getTodos, createTodos, updateTodos, deleteTodos} = require('../controllers/todo.controller');
const showLog = require('../middleware/log.middleware');
const {validateTodo} = require('../middleware/validateTodo.middleware');
const { authenticate } = require('../middleware/auth.middleware');

router.get('/',authenticate, getTodos);
router.post('/',authenticate, validateTodo, createTodos);
router.put('/:id', authenticate, updateTodos);
router.delete('/:id', authenticate, deleteTodos);


module.exports = router;
