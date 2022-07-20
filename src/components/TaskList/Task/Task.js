import React, { useState } from "react";
import "./Task.scss";

function Task(props) {
  const [task, setTask] = useState(props.task);
  const [editMode, setEditMode] = useState(false);
  const changeTaskDone = ({ target }) => {
    if (target.name === "done") {
      task.done = !task.done;
    } else {
      task[target.name] = target.value;
    }
    console.log(task);
    setTask({ ...task });
  };
  const handleMode = () => {
    setEditMode(!editMode);
  };
  return (
    <>
      {!editMode ? (
        <div className="task">
          <p>{task.date}</p>
          <p>{task.task_name}</p>
          <p>
            <input
              type="checkbox"
              checked={task.done}
              name="done"
              onChange={changeTaskDone}
            />
          </p>
          <button className="edit-btn" onClick={handleMode}>
            Edit
          </button>
        </div>
      ) : (
        <div className="task">
          <input
            type="text"
            name="date"
            value={task.date}
            onChange={changeTaskDone}
          />
          <input
            type="text"
            name="task_name"
            value={task.task_name}
            onChange={changeTaskDone}
          />
          <p>
            <input
              type="checkbox"
              checked={task.done}
              name="done"
              onChange={changeTaskDone}
            />
          </p>
          <button className="save-btn" onClick={handleMode}>
            Save
          </button>
        </div>
      )}
    </>
  );
}

export default Task;
