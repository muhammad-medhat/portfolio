import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { ImBin } from "react-icons/im";

export const TodoItem = ({ text, deleteTodo, isChecked, toggleChecked }) => {
  return (
    <div className="todo">
      <div
        className={`${isChecked ? "todo_radio" : "todo_radio_unchecked"}`}
        onClick={toggleChecked}
      >
        {isChecked && <AiOutlineCheck />}
      </div>

      <div className={` ${isChecked ? "todo_text_checked" : "todo_text"}`}>
        {text}
      </div>

      <div className="todo_delete" onClick={deleteTodo}>
        <ImBin />
      </div>
    </div>
  );
};
