import "./counter.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { counterActions } from "../reducer/store/index";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  function increament() {
    dispatch(counterActions.increament());
  }

  function decreament() {
    dispatch(counterActions.decreament());
  }

  function add() {
    dispatch(counterActions.add(value));
  }

  function subtract() {
    dispatch(counterActions.subtract(value));
  }

  return (
    <div id="counterDiv">
      <label>{count}</label>
      <button class="calc" onClick={increament}>
        Increase
      </button>
      <button class="calc" onClick={decreament}>
        Decrease
      </button>
      <input
        htmlFor="value"
        placeholder="Enter value to add/subtract"
        onChange={(e) => setValue(e.target.value)}
      />
      <button class="calc" onClick={add}>
        Add
      </button>
      <button class="calc" onClick={subtract}>
        Subtract
      </button>
    </div>
  );
}

export default Counter;
