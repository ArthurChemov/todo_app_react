import { Grid } from "@chakra-ui/react";
import { Task } from "../utilities/interfaces";
import TodoTask from "../utilities/TodoTasks";

function MinDateFirst(
    props: {
      grid: boolean,
      todoList: Task[],
      setTodoList: (value: React.SetStateAction<Task[]>) => void
      deleteTask(taskNameToDelete: string): void;
      isCompleted(taskName: string, completed: boolean): void
      isImportant(taskName: string, completed: boolean): void }) {
        const toMillisseconds = (date: string) => Date.parse(date);
        const tasksCopy = [...props.todoList];
        const sorted = tasksCopy.sort((task1, task2) => {
          const date1 = toMillisseconds(task1.date);
          const date2 = toMillisseconds(task2.date);
          if (date1 < date2) return -1;
          if (date1 > date2) return 1;
          return 0;
        });

    return (
        <Grid className="mt-4 gap-3 " style={props.grid ? {gridTemplateColumns: 'repeat(auto-fill, 270px)'}:{gridTemplateColumns: 'repeat(1, 100%)'}}>
            {sorted.map((task: Task, key: number) => {
                return <TodoTask key={key} task={task} grid={props.grid} deleteTask={props.deleteTask} isCompleted={props.isCompleted} isImportant={props.isImportant} />;
            })}
        </Grid>
    );
}

export default MinDateFirst;