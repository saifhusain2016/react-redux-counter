import "./counter.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [payload, setPayload] = useState(0);

  function increament() {
    dispatch({ type: "increament" });
  }

  function decreament() {
    dispatch({ type: "decreament" });
  }

  function add() {
    dispatch({ type: "add", payload });
  }

  function subtract() {
    dispatch({ type: "subtract", payload });
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
        htmlFor="payload"
        placeholder="Enter value to add/subtract"
        onChange={(e) => setPayload(e.target.value)}
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
