import "./counter.css";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function increament() {
    dispatch({ type: "increament" });
  }

  function decreament() {
    dispatch({ type: "decreament" });
  }

  return (
    <div id="counterDiv">
      <h1> Redux Counter</h1>
      <label>{count}</label>
      <button id="inc" onClick={increament}>
        Increase
      </button>
      <button id="dec" onClick={decreament}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
