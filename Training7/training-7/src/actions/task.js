import * as types from "./types";

export const getTasksAction = (payload) => {
  return {
    type: types.GET_TASKS_REQUEST,
    payload,
  };
};

export const createTaskAction = (payload) => {
  return {
    type: types.CREATE_TASK_REQUEST,
    payload,
  };
};

export const changeTaskStatusAction = (payload) => {
  const status = {
    Draft: "Ready",
    Error: "Ready",
  };

  return {
    type: types.CHANGE_TASK_STATUS,
    payload: {
      ...payload,
      status: status[payload.status],
    },
  };
};
