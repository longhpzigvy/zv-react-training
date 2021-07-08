import * as types from "../constants/ActionTypes";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
  page: null,
  totalItems: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOGS: {
      console.log('logs', action.payload) 
      return {
        ...state,
        logs: action.payload,
        loading: false,
        page: action.page,
        totalItems: action.totalItems,
      };
    }

    // xử lí tạo mới data logs rồi đưa lên server
    case types.ADD_LOG: {
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    }
    case types.DELETE_LOG: {
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    }

    case types.SET_CURRENT: {
      console.log("current", action.payload);
      return {
        ...state,
        current: action.payload,
      };
    }
    case types.CLEAR_CURRENT: {
      return {
        ...state,
        current: null,
      };
    }

    case types.UPDATE_LOG: {
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };
    }
    // search log
    case types.SEARCH_LOGS: {
      // console.log("payload", state.logs.filter(x => x.m)); //payload là 1 chuỗi tìm kiếm
      return {
        ...state,
        // logs: action.payload
        logs: state.logs.filter((log) => log.name.includes(action.payload)),
        // loading: false
      };
    }
    case types.SET_LOADING: {
      return { 
        ...state, 
        loading: true 
      };
    }
    case types.LOGS_ERROR: {
      console.log(action.payload);
      console.log("payload", action.payload);
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
