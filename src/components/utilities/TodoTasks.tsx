import { DeleteIcon, CheckIcon, StarIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react'
import ContentEditable from 'react-contenteditable';
import { Task } from "./interfaces";

interface Props {
  grid: boolean
  task: Task;
  deleteTask(taskNameToDelete: string): void;
  isCompleted(taskName: string, completed: boolean): void
  isImportant(taskName: string, completed: boolean): void
}

const TodoTask = ({ task, deleteTask, grid, isCompleted, isImportant }: Props) => {

  const handleChangeTitle = (evt: { target: { value: string; }; }) => {
      task.title = evt.target.value;
  };
  const handleChangeDescription = (evt: { target: { value: string; }; }) => {
      task.description = evt.target.value;
  };
  const handleChangeDate = (evt: { target: { value: string; }; }) => {
      task.date = evt.target.value;
  };

  return (
    <Flex className={` justify-between flex-col p-3 text-white bg-sky-500 rounded-xl border-[1px] border-slate-600 hover:border-0 hover:shadow-2xl min-h-[150px] ${grid ? 'w-[270px]':'w-100%'}`}>
      <Flex className=" flex-col gap-1 justify-center items-start h-auto">
        <ContentEditable className="rounded" html={task.title} onChange={handleChangeTitle} tagName='li'/>
        <ContentEditable className="rounded" html={task.description} onChange={handleChangeDescription} tagName='li'/>
        <ContentEditable className="rounded" html={task.date} onChange={handleChangeDate} tagName='li'/>
      </Flex>
      <Flex className=" flex-row-reverse">
        <IconButton aria-label={'Delete'} icon={<DeleteIcon/>} colorScheme="#00c2e0" color={'red'} onClick={() => {deleteTask(task.id); }}/>
        <IconButton aria-label={'Important'} icon={<StarIcon />} colorScheme="#00c2e0" style={task.important ? {color: 'red'}: {color: 'white'}} onClick={() => {isImportant(task.id, task.important)}}/>
        <IconButton aria-label={'Completed'} icon={<CheckIcon />} colorScheme="#00c2e0" style={task.completed ? {color: 'red'}: {color: 'white'}} onClick={() => {isCompleted(task.id, task.completed)}}/>
      </Flex>
    </Flex>
  );
};

export default TodoTask;