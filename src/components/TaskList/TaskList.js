import React from "react";
import "./TaskList.scss";
import Task from "./Task/Task";

function TaskList(props) {
  return (
    <section className="task-list">
      <div className="task task-list-header">
        <p>Date</p>
        <p>Task</p>
        <p>Done</p>
      </div>
      {[...props.tasksArr].map((task, index) => {
        return <Task task={task} key={index} />;
      })}
    </section>
  );
}

export default TaskList;
