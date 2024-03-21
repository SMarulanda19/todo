import React, {useEffect, useState} from "react";
import {  useParams, Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import './DetailsStyles.css'
function TodoDetails() {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const todoList = useSelector((state) => state.value);

  useEffect(() => {
    const todo = todoList.find((todo) => todo.id === parseInt(id));
    setTodo(todo);
  }, [todoList, id]);

  return (
    <div className="todo-details-container">
      <Link to="/" className="back-link">Back</Link>
      <div className="card">
        {todo && (
          <div>
            <h1 className="card-title">Todo Details</h1>
            <div className="card-content">
              <p><strong>ID:</strong> {todo.id}</p>
              <p><strong>Title:</strong> {todo.title}</p>
              <p><strong>Description:</strong> {todo.description}</p>
              <p><strong>Creation Date:</strong> {todo.createdAt}</p>
            </div>
          </div>
        )}
        {!todo && <div className="no-task-message">You don't have todo's</div>}
      </div>
    </div>
  );
}

export default TodoDetails;