import React from "react";
import { useState } from "react";
import TaskContainer from "./components/TaskContainer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="main-container">
      <TaskContainer className="task-container" setTasks={setTasks} tasks={tasks}/>
    </div>
  );
}

export default App;
