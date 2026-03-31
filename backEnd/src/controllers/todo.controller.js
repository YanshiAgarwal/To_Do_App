const todo = require('../models/todo.model');

const createTodos = async (req, res) => {
    try {
        const todo = await todo.create(req.body);
        res.status(200).send("created successfully");
    }
    catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

const getTodos = async (req, res) => {
    try {
        const todo = await todo.find();
        res.status(200).json(todo);
    }
    catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

const updateTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await todo.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Todo updated", data: updatedTodo });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTodos = async (req, res) => {
    try {
        const { id } = req.params;
        await todo.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo deleted" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }   
};

module.exports = { createTodos, getTodos, updateTodos, deleteTodos};