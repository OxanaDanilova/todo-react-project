import React from "react";
import "./TaskList.scss";
import Task from "./Task/Task";

function TaskList(props) {
  const tasksArr = [
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
  ];

  return (
    <section className="task-list">
      <div className="task task-list-header">
        <p>Date</p>
        <p>Task</p>
        <p>Done</p>
      </div>
      {[...tasksArr].map((task, index) => {
        return <Task task={task} key={index} />;
      })}
    </section>
  );
}

export default TaskList;
