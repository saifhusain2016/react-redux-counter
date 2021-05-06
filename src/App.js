import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/counter";

function App() {
  return (
    <div>
      <div id="counterWrapper">
        <h1> Redux Counter</h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;
