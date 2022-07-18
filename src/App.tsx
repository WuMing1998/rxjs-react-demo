import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { ForkJoin } from "./views/ForkJoin";
import { CombineLatest } from "./views/CombineLatest";
import { Merge } from "./views/Merge";

function App() {
  return (
    <div className="App">
      <Merge />
    </div>
  );
}

export default App;
