import { useSelector } from "react-redux";

export const useSelectorTodo = () => {
  return useSelector((state) => ({
    loading: state.todos.loading,
    list: (state.todos.completed
      ? state.todos.list.filter(
          (todo) => todo.completed === state.todos.completed
        )
      : state.todos.list
    ).filter((todo) => todo.name.includes(state.todos.keyword)),
    error: state.todos.error,
  }));
};
