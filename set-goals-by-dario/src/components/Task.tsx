import "../stylesheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ReactNode } from "react";
interface Props {
  id: any;
  text: any;
  complete: any;
  compTask: any;
  deleteTask: any;
}

const Task: React.FC<Props> = ({
  id,
  text,
  complete,
  compTask,
  deleteTask,
}) => {
  return (
    <div className={complete ? "task-container completed" : "task-container"}>
      <div className="task-text" onClick={() => compTask(id)}>
        {text}
      </div>
      <div className="task-icon-container" onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="task-icon" />
      </div>
    </div>
  );
};

export default Task;
