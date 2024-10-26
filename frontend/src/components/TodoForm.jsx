import React, { useState } from 'react';
import {MdAdd} from 'react-icons/md';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Füge ein neues ToDo hinzu..."
                className="todo-form__input-text"
            />
            <button type="submit" className={`todo-form__add-button ${text ? "active" : "disabled"}`}>
                <MdAdd size={25}/>
            </button>
        </form>
    );
};
export default TodoForm;
