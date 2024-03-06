import { useContext } from "react";

import { TodoContext } from "../store/TodoContext";

export const List = () => {
  const [state, dispatch] = useContext(TodoContext);

  const handleClick = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  return (
    <ul>
      {state.todos.map(({ id, text }) => (
        <li key={id}>
          <span>{text}</span>
          <button onClick={() => handleClick(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};
