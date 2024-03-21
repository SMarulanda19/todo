import React, { useEffect, useState } from "react";
import { store, addTodo } from './../../store';
import { Link, useNavigate } from 'react-router-dom';
import './newTodoStyles.css'; // Importa el archivo de estilos CSS

function NewTodo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString(),
      state: 'todo'
    };
    store.dispatch(addTodo(newTodo))
    navigate('/')
  };

  return (
    <>
    <div className="full-page-container">
    <div className="new-todo-container">
      <h1 className="new-todo-title">Nuevo Todo</h1>
      <form onSubmit={handleSubmit} className="new-todo-form">
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="new-todo-input"
          />
        </label>
        <label>
          Descripción:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="new-todo-textarea"
          />
        </label>
        <button type="submit" className="new-todo-button">Guardar</button>
        <Link to="/" className="new-todo-link">Volver</Link>
      </form>
    </div>
    </div>
    </>
  );
}

export default NewTodo;
