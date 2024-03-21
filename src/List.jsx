import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { updateTodo, store, removeTodo, addTodo, cleanList } from './store';
import './ListStyles.css';


function TodoList() {
  
  const todoList = useSelector((state) => state.value)

  useEffect(() => {
  }, [todoList]);

  const toggleState = function(todoId){
    const todo = todoList.find(t => +t.id === +todoId);

    if(!todo){
      console.error('invalied todo');
      return;
    }

    const newTodo = {
      ...todo,
      state: todo.state === 'done' ? 'todo' : 'done'
    }
    store.dispatch(updateTodo(newTodo))
  }

  const handleDeleteTodo = function (todoId) {
    store.dispatch(removeTodo(todoId))
  }

  const cleanStore = function (todoId) {
    store.dispatch(cleanList())
  }

  return (
    <>
    <div className='centered-container '>
    <div className="todo-list-container">
      <h1 className="todo-list-title">Todo List </h1>
      <Link to="/new" className="todo-list-link">Nuevo Todo</Link>
      {todoList?.length && <button onClick={() => cleanStore()} className="todo-list-button">Clear List</button>}
      {todoList?.length && todoList.map(todo => (
        <div key={todo.id} className="todo-item">
          <h2 className="todo-title"><Link to={`/todo/${todo.id}`} className="todo-link">{todo.title}</Link></h2>
          <h3 className="todo-state">{todo.state}</h3>
          <button onClick={() => handleDeleteTodo(todo.id)} className="todo-delete-button">Delete</button>
          <button onClick={() => toggleState(+todo.id)} className="todo-toggle-button">Change State</button>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}

export default TodoList;
