const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/todos', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedTodos = todos.slice(startIndex, endIndex);
    const totalPages = Math.ceil(todos.length / limit) === 0 ? 1 : Math.ceil(todos.length / limit);

    res.json({
        todos: paginatedTodos,
        totalPages: totalPages,
        currentPage: page
    });
});

app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        text: req.body.text,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/todos/:id/complete', (req, res) => {
    const todoId = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== todoId);
    res.status(200).json({ message: 'Todo ist fertig!' });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
