import React from "react";
import "./TaskList.scss";
import Task from "./Task/Task";

function TaskList({ tasksArr, dispatch }) {
  return (
    <section className="task-list">
      <div className="task task-list-header">
        <p>Date</p>
        <p>Task</p>
        <p>Done</p>
      </div>
      {[...tasksArr].map((task, index) => {
        return (
          <Task task={task} key={index} index={index} dispatch={dispatch} />
        );
      })}
    </section>
  );
}

export default TaskList;
