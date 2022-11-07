import Task from "./Task";
import AddButton from "./AddButton";

const TaskContainer = (props) => {
  return (
    <>
      <h1 className="header">
        Task Tracker <AddButton setTasks={props.setTasks} tasks={props.tasks} />
      </h1>
      <div className="task-container">
        <Task setTasks={props.setTasks} tasks={props.tasks} />
      </div>
    </>
  );
};
export default TaskContainer;
