import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { TodoItem } from "./todoItem";
// import { json } from "express";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { TypeH3 } from "react-bootstrap-icons";
export const Todos = () => {
  const [localStorageName] = useState("todos");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const getTodos = () => {
    const ret = JSON.parse(localStorage.getItem(localStorageName));
    if (ret) setTasks(ret);
    // return ret;
  };
  const addTodo = (e) => {
    e.preventDefault();

    debugger;
    const newTodo = { id: new Date().getTime(), name: task };
    if (task !== "") {
      setTasks([...tasks, newTodo]);
      setTask("");
    }

    console.log(tasks);
  };
  const deleteTodo = (id) => {
    const filtered = tasks.filter((t) => t.id !== id);
    setTasks(filtered);
    localStorage.setItem(localStorageName, JSON.stringify(filtered));
  };
  console.log("tasks", tasks);

  useEffect(() => {
    debugger;
    getTodos();
  }, []);
  useEffect(() => {
    console.log("useEffect...");
    debugger;
    localStorage.setItem(localStorageName, JSON.stringify(tasks));
  }, [tasks]);
  const displayTodos = (list) => {
    debugger;
    list.length > 0 ? (
      list.map((task) => {
        // <li key={task.id}>{task.name}</li>;
        <TodoItem />;
      })
    ) : (
      <li>
        <h3>Nothing to show</h3>
      </li>
    );
  };
  return (
    <>
      <Container className="main">
        <h1>
          Todo App(
          {tasks ? tasks.length : "NA"})
        </h1>
        <form className="form" onSubmit={addTodo}>
          <input
            type="text"
            value={task}
            placeholder="Add  your Todo"
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="btn-primary">Add</button>

          <ul className="todos-list">
            {tasks.map((task) => {
              <TodoItem key={task.id} />;
            })}
            {/* <li>my first todo task</li>
            <li className="completed">my first todo task</li>
            <li>my first todo task</li> */}
          </ul>
        </form>
      </Container>
    </>
  );
};
