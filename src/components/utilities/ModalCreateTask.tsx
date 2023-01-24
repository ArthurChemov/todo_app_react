import { FC, useState, ChangeEvent } from "react";
import { Flex } from '@chakra-ui/react'
import { Task } from "./interfaces";
import TodoTask from "../utilities/TodoTasks";

const InputCheckbox: React.FC<{
    label: string;
    isChecked: boolean;
    setChecked: (value: React.SetStateAction<boolean>) => void;
  }> = ({ isChecked, setChecked, label }) => {
    return (
      <label className="mb-0 flex items-center cursor-pointer">
        <div className="mr-2 bg-slate-300/[.5] dark:bg-slate-800 w-5 h-5 rounded-full grid place-items-center border border-slate-300 dark:border-slate-700">
          {isChecked && (
            <span className="bg-rose-500 w-2 h-2 block rounded-full"></span>
          )}
        </div>
        <span className="order-1 flex-1">{label}</span>
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={() => setChecked((prev: boolean) => !prev)}
        />
      </label>
    );
  };

const ModalCreateTask: FC<{ grid: boolean}> = (grid) => {

  const today: Date = new Date();
  let day: number = today.getDate();
  let month: number = today.getMonth() + 1;
  const year: number = today.getFullYear();
  if (day < 10) {
    day = +("0" + day);
  }
  if (month < 10) {
    month = +("0" + month);
  }

  const todayDate: string = year + "-" + month + "-" + day;

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>(todayDate);
  const [completed, setCompleted] = useState<boolean>(false);
  const [important, setImportant] = useState<boolean>(false);
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
    if (event.target.name === "completed") {
      setCompleted(Boolean(event.target.value));
    }
    if (event.target.name === "important") {
      setImportant(Boolean(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { title: title, description: description, date: date, completed: completed, important: important};
    setTodoList([...todoList, newTask]);
    setTitle("");
    setDescription("");
    setDate("");
    setCompleted(false);
    setImportant(false);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.title !== taskNameToDelete;
      })
    );
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <button onClick={() => setShowModal(true)} className='rounded-xl text-slate-300 bg-sky-600 hover:bg-sky-700 mt-3 mr-3
        small:h-12 md:h-18 lg:h-18
        small:w-28 md:w-36 lg:w-48
        small:text-xs md:text-base lg:text-xl'
    >
        New task
    </button>
    <Flex className={` justify-start items-start mt-4 gap-3${grid ? ' columns-3':' columns-1'}`}>
      {todoList.map((task: Task, key: number) => {
        return <TodoTask key={key} task={task} completeTask={completeTask} />;
      })}
    </Flex>
  {showModal ? (
    <>
        <div className="flex justify-center items-center overflow-x-hidden bg-[0,0,0.5] overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex justify-center items-center relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-5/6 bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font=semibold">Task Info</h3>
                    </div>
                    <div className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full first-letter:relative p-6 flex-auto">
                        <label>
                        Title
                        <input
                            type="text"
                            placeholder="e.g, study for the test"
                            required
                            name="title"
                            value={title}
                            onChange={handleChange}
                            className="w-full rounded"
                        />
                        </label>
                        <label>
                        Date
                        <input
                            type="date"
                            className="w-full rounded"
                            name="date"
                            value={date}
                            required
                            onChange={handleChange}
                        />
                        </label>
                        <label>
                        Description (optional)
                        <textarea
                            placeholder="e.g, study for the test"
                            className="w-full rounded"
                            name="description"
                            value={description}
                            onChange={({ target }) => setDescription(target.value)}
                        ></textarea>
                        </label>
                        <label className="mb-0 flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="completed"
                          value="completed"
                          onChange={handleChange}
                        />
                        Mark as completed
                        </label>
                        <label className="mb-0 flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="important"
                          value="important"
                          onChange={handleChange}
                        />
                        Mark as important
                        </label>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowModal(false)} >
                            Close
                        </button>
                        <button
                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        onClick={addTask}
                        >
                            Add a task
                        </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  ) : null}
</>
);
};

// const Modal: React.FC<{
//     onClose: () => void;
//     task?: Task;
//     onConfirm: (task: Task) => void;
//   }> = ({ onClose, task, onConfirm }) => {

//     const today: Date = new Date();
//     let day: number = today.getDate();
//     let month: number = today.getMonth() + 1;
//     const year: number = today.getFullYear();
//     if (day < 10) {
//       day = +("0" + day);
//     }
//     if (month < 10) {
//       month = +("0" + month);
//     }

//     const todayDate: string = year + "-" + month + "-" + day;
//     const maxDate: string = year + 1 + "-" + month + "-" + day;

//     const [description, setDescription] = useState<string>(() => {
//       if (task) {
//         return task.description;
//       }
//       return "";
//     });
//     const [title, setTitle] = useState<string>(() => {
//       if (task) {
//         return task.title;
//       }
//       return "";
//     });
//     const [date, setDate] = useState<string>(() => {
//       if (task) {
//         return task.date;
//       }
//       return todayDate;
//     });
//     const isTitleValid = useRef<Boolean>(false);
//     const isDateValid = useRef<Boolean>(false);

//     const [isImportant, setIsImportant] = useState<boolean>(() => {
//       if (task) {
//         return task.important;
//       }
//       return false;
//     });

//     const [isCompleted, setIsCompleted] = useState<boolean>(() => {
//       if (task) {
//         return task.completed;
//       }
//       return false;
//     });
//     const [showModal, setShowModal] = useState(false);

//     const addNewTaskHandler = (event: React.FormEvent): void => {
//         event.preventDefault();

//         isTitleValid.current = title.trim().length > 0;
//         isDateValid.current = date.trim().length > 0;

//         if (isTitleValid.current && isDateValid.current) {
//           const newTask: Task = {
//               title: title,
//               description: description,
//               date: date,
//               completed: isCompleted,
//               important: isImportant
//           };
//           onConfirm(newTask);
//           onClose();
//         }
//       };

//     return (
//         <>
//         <button onClick={() => setShowModal(true)} className='rounded-xl text-slate-300 bg-sky-600 hover:bg-sky-700 mt-3 mr-3
//             small:h-12 md:h-18 lg:h-18
//             small:w-28 md:w-36 lg:w-48
//             small:text-xs md:text-base lg:text-xl'
//         >
//             New task
//         </button>
//       {showModal ? (
//         <>
//             <div className="flex justify-center items-center overflow-x-hidden bg-[0,0,0.5] overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//                 <div className="flex justify-center items-center relative w-auto my-6 mx-auto max-w-3xl">
//                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-5/6 bg-white outline-none focus:outline-none">
//                         <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
//                             <h3 className="text-3xl font=semibold">Task Info</h3>
//                         </div>
//                         <div className="relative p-6 flex-auto">
//                             <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={addNewTaskHandler}>
//                             <label>
//                             Title
//                             <input
//                                 type="text"
//                                 placeholder="e.g, study for the test"
//                                 required
//                                 value={title}
//                                 onChange={({ target }) => setTitle(target.value)}
//                                 className="w-full rounded"
//                             />
//                             </label>
//                             <label>
//                             Date
//                             <input
//                                 type="date"
//                                 className="w-full rounded"
//                                 value={date}
//                                 required
//                                 onChange={({ target }) => setDate(target.value)}
//                                 min={todayDate}
//                                 max={maxDate}
//                             />
//                             </label>
//                             <label>
//                             Description (optional)
//                             <textarea
//                                 placeholder="e.g, study for the test"
//                                 className="w-full rounded"
//                                 value={description}
//                                 onChange={({ target }) => setDescription(target.value)}
//                             ></textarea>
//                             </label>
//                             <InputCheckbox
//                             isChecked={isImportant}
//                             setChecked={setIsImportant}
//                             label="Mark as important"
//                             />
//                             <InputCheckbox
//                             isChecked={isCompleted}
//                             setChecked={setIsCompleted}
//                             label="Mark as completed"
//                             />
//                             <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                             <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1" type="button" onClick={() => setShowModal(false)} >
//                                 Close
//                             </button>
//                             <button
//                             className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
//                             type="submit"
//                             onClick={() => setShowModal(false)}
//                             >
//                                 Add a task
//                             </button>
//                             </div>
//                             </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//         </>
//       ) : null}
//     </>
//   );
// };

export default ModalCreateTask;