import React, { useReducer } from "react";
import "./App.scss";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
const reducer = (state, action) => {
  switch (action.type) {
    case "addNewTask":
      return [...state, action.payload];
    case "changeTask":
      return state.map((task, index) => {
        if (index === action.payload.index) {
          task = action.payload.task;
        }
        return task;
      });
    case "deleteTask":
      return state.filter((task, index) => index !== action.payload);

    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, [
    {
      date: "10-07-2022",
      task_name: "Bad putzen",
      done: false,
    },
    {
      date: "12-07-2022",
      task_name: "Lebensmittel kaufen",
      done: true,
    },
  ]);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Task list</h1>
        <AddTask dispatch={dispatch} />
        <TaskList tasksArr={state} dispatch={dispatch} />

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
