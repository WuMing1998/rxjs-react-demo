import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { ForkJoin } from "./views/ForkJoin";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ForkJoin />
    </div>
  );
}

export default App;
