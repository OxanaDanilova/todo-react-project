import "./Task.scss";

function Task(props) {
  return (
    <div className="task">
      <p>{props.task.date}</p>
      <p>{props.task.task_name}</p>
      <p>
        <input type="checkbox" defaultChecked={props.task.done} />
      </p>
    </div>
  );
}

export default Task;
