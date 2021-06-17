import { tasks } from "../data/sample";

export const getTasks = (action) => {
  return { data: tasks };
};

export const createTask = (action) => {
  const newTask = {
    id: tasks[tasks.length - 1].id + 1,
    name: action.payload,
    status: "Draft",
    isSubmitting: false,
  };

  return { data: newTask };
};

export const changeTaskStatus = (action) => {
  switch (action.payload.status) {
    case "Draft":
      return { data: { id: action.payload.id, status: "Ready" } };
    case "Ready":
      return { data: { id: action.payload.id, status: "Submitting" } };
    case "Submitting":
      return {
        data: {
          id: action.payload.id,
          status: ["Error", "Success"][
            Math.floor(Math.random() * ["Error", "Success"].length)
          ],
        },
      };
    case "Error":
      return { data: { id: action.payload.id, status: "Ready" } };
    case "Success":
    default:
      return { data: { id: action.payload.id, status: action.payload.status } };
  }
};
