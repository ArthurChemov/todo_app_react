import React from "react";
import { Task } from "./interfaces";

interface Props {
  task: Task;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span className="bg-white rounded mr-2">{task.title} </span>
        <span className="bg-white rounded mr-2">{task.description} </span>
        <span className="bg-white rounded mr-2">{task.date} </span>
      <button onClick={() => {completeTask(task.title); }}> X </button>
      </div>
    </div>
  );
};

export default TodoTask;