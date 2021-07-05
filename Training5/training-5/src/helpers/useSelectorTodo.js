import { useSelector } from "react-redux";

export const useSelectorTodo = () => {
  return useSelector((state) => ({
    ...state,
    list: (state.todos.completed
      ? state.todos.list.filter(
          (todo) => todo.completed === state.todos.completed
        )
      : state.todos.list
    ).filter((todo) => todo.name.includes(state.todos.keyword)),
    error: state.todos.error,
  }));
};
