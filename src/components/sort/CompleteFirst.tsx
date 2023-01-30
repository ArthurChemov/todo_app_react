import { Grid } from "@chakra-ui/react";
import { Task } from "../utilities/interfaces";
import TodoTask from "../utilities/TodoTasks";

function CompleteFirst(
    props: {
      grid: boolean,
      todoList: Task[],
      setTodoList: (value: React.SetStateAction<Task[]>) => void
      deleteTask(taskNameToDelete: string): void;
      isCompleted(taskName: string, completed: boolean): void
      isImportant(taskName: string, completed: boolean): void }) {

    return (
        <Grid className="mt-4 gap-3 " style={props.grid ? {gridTemplateColumns: 'repeat(auto-fill, 270px)'}:{gridTemplateColumns: 'repeat(1, 100%)'}}>
            {props.todoList.map((task: Task, key: number) => {
                if(task.completed === true)
                return <TodoTask key={key} task={task} grid={props.grid} deleteTask={props.deleteTask} isCompleted={props.isCompleted} isImportant={props.isImportant} />;
            })}
            {props.todoList.map((task: Task, key: number) => {
                if(task.completed === false)
                return <TodoTask key={key} task={task} grid={props.grid} deleteTask={props.deleteTask} isCompleted={props.isCompleted} isImportant={props.isImportant} />;
            })}
        </Grid>
    );
}

export default CompleteFirst;