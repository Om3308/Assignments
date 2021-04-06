import React, { useState, useEffect } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [tasksRemaining, setTasksRemaining] = useState(0);

  useEffect(() => {
    setTasksRemaining(todos.filter((task) => !task.completed).length);
  });

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        completed: false,
      },
    ]);
  };
const updateTodo=(e)=>{

}
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    addTodo();
    setTodo("");
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };
  const TableHeader = () => {
    return (
      <thead className="thead-light">
        <tr>
          <th>Todo Id</th>
          <th>Task Items</th>
          <th>Delete Task</th>
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    const rows = todos.map((todo) => {
      return (
        <tr key={todo.id}>
          <td>{todo.id}</td>
          <td>
            {" "}
            <span
              className={todo.completed ? "todo-completed" : undefined}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
          </td>
          <td>
            {" "}
            <span
              className="btn btn-danger"
              onClick={() => removeTodo(todo.id)}
            >
              Delete Todo
            </span>
          </td>
        </tr>
      );
    });
    return <tbody>{rows}</tbody>;
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Todo text</label>
        <br />
        <input
          id="todo"
          className="todo-input"
          onChange={handleChange}
          value={todo}
        />
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>

      <table className="table table-sm table-hover table-bordered">
        <caption>List of Tasks</caption>
        <TableHeader />
        <TableBody />
      </table>
      <div className="pending">Pending tasks ({tasksRemaining})</div>
    </div>
  );
}
export default TodoApp;
