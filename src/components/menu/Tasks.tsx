import { FC, ChangeEvent, useState } from "react";
import TodoTask from "../utilities/TodoTasks";
import { Task } from "../utilities/interfaces";

const Tasks: FC = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [completed] = useState<boolean>(false);
    const [important] = useState<boolean>(false);
    const [id] = useState<string>("");
    const [todoList, setTodoList] = useState<Task[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      if (event.target.name === "title") {
        setTitle(event.target.value);
      }
      if (event.target.name === "description"){
        setDescription(String(event.target.value));
      }
      if (event.target.name === "date") {
        setDate(String(event.target.value));
      }
    };

    const addTask = (): void => {
      const newTask = { title: title, description: description, date: date, completed: completed, important: important, id: id };
      setTodoList([...todoList, newTask]);
      setTitle("");
      setDescription("");
      setDate("");
    };

    const completeTask = (taskNameToDelete: string): void => {
      setTodoList(
        todoList.filter((task) => {
          return task.title !== taskNameToDelete;
        })
      );
    };

    return (
        <div>
            <div>
            <div>
                <input
                className=" mr-2"
                type="text"
                placeholder="Task..."
                name="title"
                value={title}
                onChange={handleChange}
                />
                <input
                className=" mr-2"
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onChange={handleChange}
                />
                <input
                className=" mr-2"
                type="date"
                placeholder="Date"
                name="date"
                value={date}
                onChange={handleChange}
                />
            </div>
            <button onClick={addTask}>Add Task</button>
            </div>
            <div className="todoList">
            {todoList.map((task: Task, key: number) => {
                return <TodoTask key={key} task={task} completeTask={completeTask} />;
            })}
            </div>
        </div>
    );
}

export default Tasks;