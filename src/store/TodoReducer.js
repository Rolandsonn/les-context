// TodoReducer.js
export const initialState = {
  todos: [
    { id: 1, text: "Изучить React" },
    { id: 2, text: "Изучить Redux" },
    { id: 3, text: "Изучить GraphQL" },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        todos: [...state.todos, action.payload],
      };
    case "remove":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      throw new Error("Что происходит?");
  }
};
