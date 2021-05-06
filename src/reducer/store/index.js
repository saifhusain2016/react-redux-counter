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
  if (action.type === "add") {
    return {
      count: state.count + +action.payload,
    };
  }
  if (action.type === "subtract") {
    return {
      count: state.count - +action.payload,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
