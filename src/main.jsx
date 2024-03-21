import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import "./index.css";
import TodoList from './List'
import NewTodo from "./components/NewTodo/NewTodo";
import Details from './Details'
import { Provider } from 'react-redux';
import {store} from './store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TodoList></TodoList>,
  },
  {
    path: "/new",
    element: <NewTodo></NewTodo>,
  },
  {
    path: "/todo/:id",
    element: <Details></Details>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>
);