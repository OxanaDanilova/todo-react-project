import React from "react";
import "./App.scss";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Task list</h1>
        <TaskList />

        <a
          className="App-link"
          href="https://github.com/OxanaDanilova"
          target="_blank"
          rel="noopener noreferrer"
        >
          My github
        </a>
      </div>
    </div>
  );
}

export default App;
