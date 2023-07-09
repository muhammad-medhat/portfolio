import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { TodoItem } from "./todoItem";
import { TbArrowBarDown } from "react-icons/tb";
const localStorageKey = "todosVar";

export const Todos = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  const addTodo = (e) => {
    e.preventDefault();
    //debugger;

    const todoItem = {
      id: new Date().getTime(),
      text: todo,
      isChecked: false,
    };

    if (todo !== "") {
      //setAllTodos([...allTodos].concat(todoItem).reverse());
      setAllTodos([...allTodos, todoItem].reverse());
      setTodo("");
    }

    console.log(allTodos);
  };

  const getAllTodos = () => {
    let stored = JSON.parse(localStorage.getItem(localStorageKey));

    if (stored) {
      setAllTodos(stored);
    }
  };

  const toggleChecked = (id) => {
    let updatedTodos = [...allTodos].map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }

      return todo;
    });

    setAllTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const filteredTodo = allTodos.filter((todo) => todo.id !== id);
    setAllTodos(filteredTodo);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <div className="App_todo">
      <form className="App_input_wrapper" onSubmit={addTodo}>
        <input
          type={"text"}
          className="App_input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="App_input_button" onClick={addTodo}>
          <TbArrowBarDown size={24} />
        </div>
      </form>

      <div className="App_todo_list">
        {allTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            deleteTodo={() => deleteTodo(todo.id)}
            text={todo.text}
            isChecked={todo.isChecked}
            toggleChecked={() => toggleChecked(todo.id)}
          />
        ))}

        {allTodos.length === 0 && <p className="empty">There are no Todo's</p>}
      </div>
    </div>
  );
};
