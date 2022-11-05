import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Modal from "react-bootstrap/Modal";

const AddButton = (props) => {
  const [show, setShow] = useState(false);
  const [taskDescription, SetTaskDescription] = useState("");
  const [taskTime, SetTaskTime] = useState("");
  

  function onSubmit(e) {
    e.preventDefault();
  }
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  return (
    <>
      <button className="add-button" onClick={() => setShow(!show)}>
        Add
      </button>
      <Modal show={show} onHide={handleClose} 
      
      >
        <Modal.Header closeButton className="close-form">
          <Modal.Title>Add a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Task description"
              onChange={(e) => {
                SetTaskDescription(e.target.value);
                //console.log(taskDescription)
              }}
            ></input>
            <br></br>
            <br></br>
            <input
              type="text"
              placeholder="Task date and time"
              onChange={(e) => {
                SetTaskTime(e.target.value);
                //console.log(taskTime)
              }}
            ></input>
            <br></br>
            <br></br>
            <button className="add-task"
              onClick={() => {
                const taskObj = {
                  task: taskDescription,
                  task_time: taskTime,
                }
                fetch("http://localhost:3001/", {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(taskObj),
                })
                  .then((result) => result.json())
                  .then((data) => {
                    props.setTasks((tasks) => {
                      return [...tasks,data[0]]
                    })
                  })
                  .then(handleClose)
                 
                  
              }}
            >
              Add a Task
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default AddButton;
