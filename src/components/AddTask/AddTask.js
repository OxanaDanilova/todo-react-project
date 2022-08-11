import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

export default function AddTask(props) {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  function addDate(event) {
    setTaskDate(event.target.value);
  }
  function addTaskName(event) {
    setTaskName(event.target.value);
  }
  function addNewTask(taskDate, taskName, event) {
    event.preventDefault();
    if (taskDate.trim() && taskName.trim()) {
      props.dispatch({
        type: "addNewTask",
        payload: {
          date: taskDate,
          task_name: taskName,
          done: false,
        },
      });
      setTaskName("");
      setTaskDate("");
    }
  }
  return (
    <Form>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              type="date"
              placeholder="Choose date"
              required
              value={taskDate}
              onChange={addDate}
            />
            <Form.Control
              aria-label="Text input with checkbox"
              required
              value={taskName}
              onChange={addTaskName}
            />
            <InputGroup.Checkbox
              aria-label="Checkbox for following text input"
              disabled
            />
          </InputGroup>
        </Col>
        <Col md="auto">
          <Button
            variant="primary"
            type="submit"
            onClick={(event) => addNewTask(taskDate, taskName, event)}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
