import React from "react";
import Header from "./components/Header";
import TaskContainer from "./components/TaskContainer";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="main-container">
      <Header />
      <TaskContainer className='task-container'/>
    </div>
  );
}

export default App;
