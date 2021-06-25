let initialState = [];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "DATA":
      return [...payload];

    case "STATE_COMPLETE":
      const index = state.findIndex((item) => item.id === payload.id);
      state[index]["completed"] = !payload["completed"];
      return [...state];

    default:
      return state;
  }
};

export default reducer;
