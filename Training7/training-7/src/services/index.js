import { tasks } from "../data/sample";

export const getTasks = () => {
  return { data: tasks };
};

export const createTask = (action) => {
  const newTask = {
    id: tasks[tasks.length - 1].id + 1,
    name: action.payload,
    status: "Draft",
  };

  return { data: newTask };
};
