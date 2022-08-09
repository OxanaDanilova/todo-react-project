import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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
  const deleteTask = () => {
    props.deleteTask(props.index);
  };

  useEffect(() => {
    props.changeTask(props.index, task);
  }, [task]);
  return (
    <>
      {!editMode ? (
        <div className="task">
          <p>{task.date} </p>

          <p>{task.task_name}</p>
          <p>
            <Form.Check
              type="checkbox"
              checked={task.done}
              name="done"
              onChange={changeTaskDone}
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
          </p>

          <Button onClick={handleMode} variant="info">
            <i className="fa-solid fa-pencil"></i>
          </Button>
          <Button onClick={deleteTask} variant="danger">
            &times;
          </Button>
        </div>
      ) : (
        <div className="task">
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            type="text"
            name="date"
            value={task.date}
            onChange={changeTaskDone}
          />

          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            type="text"
            name="task_name"
            value={task.task_name}
            onChange={changeTaskDone}
          />

          <Form.Check
            type="checkbox"
            checked={task.done}
            name="done"
            onChange={changeTaskDone}
            style={{ alignSelf: "center", justifySelf: "center" }}
          />

          <Button onClick={handleMode} variant="success">
            <i className="fa-solid fa-check"></i>
          </Button>
          <Button onClick={deleteTask} variant="danger">
            &times;
          </Button>
        </div>
      )}
    </>
  );
}

export default Task;
