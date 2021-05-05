import { createStore } from "redux";

const initialState = {
  count: 1,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "increament") {
    return {
      count: state.count + 1,
    };
  }
  if (action.type === "decreament") {
    return {
      count: state.count - 1,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
