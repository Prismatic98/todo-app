import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Pagination from "./components/Pagination";
import './App.scss';
import './styles/main.scss';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchTodos();
  }, [page]);

  const fetchTodos = async () => {
    try {
      const response = await fetch(`http://localhost:5000/todos?page=${page}`);
      const data = await response.json();
      if (data.todos) setTodos(data.todos);
      if (data.totalPages) setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (text) => {
    try {
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });
      if (response.ok) {
        await fetchTodos();
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const completeTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}/complete`, {
        method: 'PUT',
      });
      if (response.ok) {
        fetchTodos();
      }
    } catch (error) {
      console.error('Error completing todo:', error);
    }
  };

  return (
      <div className="app-container">
        <div className="app-box">
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} completeTodo={completeTodo} />
          <Pagination page={page} totalPages={totalPages} setPage={setPage} />
        </div>
      </div>
  );
};

export default App;
