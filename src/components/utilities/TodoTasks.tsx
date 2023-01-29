/* eslint-disable @typescript-eslint/no-unused-expressions */
import { DeleteIcon, CheckIcon, StarIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react'
import { Task } from "./interfaces";

interface Props {
  task: Task;
  completeTask(taskNameToDelete: string): void;
  grid: boolean
}

const TodoTask = ({ task, completeTask, grid }: Props) => {

  return (
    <Flex className={` justify-between flex-col p-3 text-white bg-sky-500 rounded-xl border-[1px] border-slate-600 hover:border-0 hover:shadow-2xl min-h-[150px] ${grid ? 'w-[270px]':'w-100%'}`}>
      <Flex className=" flex-col gap-1 justify-center items-start h-auto">
        <span className="rounded">{task.title} </span>
        <span className="rounded">{task.description} </span>
        <span className="rounded">{task.date} </span>
        <span className="rounded">{task.completed} </span>
        <span className="rounded">{task.important} </span>
      </Flex>
      <Flex className=" flex-row-reverse">
        <IconButton aria-label={'Delete'} icon={<DeleteIcon/>} colorScheme="#00c2e0" color={'red'} onClick={() => {completeTask(task.title); }}/>
        <IconButton aria-label={'Important'} icon={<StarIcon />} colorScheme="#00c2e0" color={task.important ? 'red': 'white'} onClick={() => {
          if(task.important === true) task.important = false
          else task.important = true
          }}/>
        <IconButton aria-label={'Completed'} icon={<CheckIcon />} colorScheme="#00c2e0" color={task.completed ? 'red': 'white'} onClick={() => {
          if(task.completed === true) task.completed = false
          else task.completed = true
          }}/>
      </Flex>
    </Flex>
  );
};

export default TodoTask;