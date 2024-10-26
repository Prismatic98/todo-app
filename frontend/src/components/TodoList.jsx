import React from 'react';
import {MdCheck} from 'react-icons/md';

const TodoList = ({ todos, completeTodo }) => (
    <ul className="todo-list">
        {todos.map((todo) => (
            <li key={todo.id} className="todo-list__item">
                <span>{todo.text}</span>
                <button onClick={() => completeTodo(todo.id)} className="todo-list__complete-button">
                    <MdCheck size={25}/>
                </button>
            </li>
        ))}
    </ul>
);

export default TodoList;
