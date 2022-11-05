import { AiOutlineClose } from "react-icons/ai";

const DeleteButton = (props) => {
  return (
    <AiOutlineClose className="delete"
      onClick={() => {
        //let currentTask = e.target
        // console.log(props.delete)
        fetch(`http://localhost:3001/${props.delete.task_id}`, {
          method: "DELETE",
        }).then(() => {
          props.setTasks((tasks) => {
            return tasks.filter((task) => props.delete.task !== task.task);
          });
        });
      }}
    />
  );
};
export default DeleteButton;
