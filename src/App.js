import React, { useState } from "react";
import "./App.scss";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasksArr, setTasksArr] = useState([
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
  function addNewTask(date, taskName) {
    setTasksArr([
      ...tasksArr,
      { date: date, task_name: taskName, done: false },
    ]);
  }
  const deleteTask = (id) => {
    setTasksArr(tasksArr.filter((task, index) => index !== id));
    console.log(tasksArr);
  };
  const changeTask = (id, changedTask) => {
    setTasksArr(
      tasksArr.map((task, index) => {
        if (index === id) {
          task = changedTask;
        }
        return task;
      })
    );
    console.log(tasksArr);
  };
  return (
    <div className="App">
      <div className="App-header">
        <h1>Task list</h1>
        <AddTask addNewTask={addNewTask} />
        <TaskList
          tasksArr={tasksArr}
          deleteTask={deleteTask}
          changeTask={changeTask}
        />

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
