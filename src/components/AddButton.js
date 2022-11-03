import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const AddButton = () => {
  const [show, setShow] = useState(false);
  const [userInput, SetUserInput] = useState("");

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);
  return (
    <>
      <button className="add-button" onClick={() => setShow(!show)}>
        Add
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Task:</label>
            <input type="text"></input><br/>
            <label>Time and Date</label>
            <input type="text"></input>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default AddButton;
