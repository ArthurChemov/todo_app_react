import { Flex } from '@chakra-ui/react'
import { Task } from "./interfaces";

interface Props {
  task: Task;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <Flex className=" flex-col justify-center items-center gap-1 bg-slate-100 rounded border-neutral-700">
        <span className="rounded mr-2">{task.title} </span>
        <span className="rounded mr-2">{task.description} </span>
        <span className="rounded mr-2">{task.date} </span>
        <span className="rounded mr-2">{task.completed} </span>
        <span className="rounded mr-2">{task.important} </span>
      <button onClick={() => {completeTask(task.title); }} className=' text-black'> Delete </button>
    </Flex>
  );
};

export default TodoTask;