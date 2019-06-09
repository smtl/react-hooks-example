import React from "react";
import "./App.css";
import Counter from "./counter/counter";
import CounterWithReducer from "./counterWithReducer/counterWithReducer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <br />
        <br />
        <CounterWithReducer></CounterWithReducer>
      </header>
    </div>
  );
}

export default App;
