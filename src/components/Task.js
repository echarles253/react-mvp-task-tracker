import { useEffect } from "react";
import DeleteButton from "./DeleteButton";
const Task = (props) => {
  
  useEffect(() => {
    const url = "http://localhost:3001/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => props.setTasks(data));
  }, []);

  return props.tasks.map((task) => {
    return (
      <div className="task-cards" keys={task.task_id}>
        <h3>
          {task.task} 
        </h3>
          <DeleteButton delete={task} setTasks={props.setTasks} />
        <p>{task.task_time}</p>
      </div>
    );
  });
};

export default Task;
