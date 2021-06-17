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
  return {
    type: types.CHANGE_TASK_STATUS_REQUEST,
    payload: {
      ...payload,
      status: payload.status === "Ready" ? "Submitting" : payload.status,
    },
  };
};
