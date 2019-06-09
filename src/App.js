import React from "react";
import "./App.css";
import Counter from "./counter/counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Counter using hooks</p>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
