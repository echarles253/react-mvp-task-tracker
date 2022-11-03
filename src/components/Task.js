import { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
const Task = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3001/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return tasks.map((task) => {
    console.log(task);
    return (
      <div className="task-cards">
        <h3> {task.task} <DeleteButton/></h3>
        <p>{task.task_time}</p>
      </div>
    );
  });
};

export default Task;
