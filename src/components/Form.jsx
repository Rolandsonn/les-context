import { useState, useContext } from "react";

import { TodoContext } from "../store/TodoContext";

export const Form = () => {
  const [text, setText] = useState("");
  // замыкающая запятая (trailing comma)
  const [state, dispatch] = useContext(TodoContext);

  const handleChange = ({ target: { value } }) => {
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      text,
    };

    dispatch({ type: "add", payload: newTodo });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Текст задачи: <br />
        <input type="text" value={text} onChange={handleChange} /> <br />
        <button>Добавить</button>
      </label>
    </form>
  );
};
