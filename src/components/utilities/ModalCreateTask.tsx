import React, { useState, ChangeEvent } from "react";
import { Task } from "./interfaces";

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

function ModalCreateTask (
  props: {
    title: string,
    setTitle: (value: React.SetStateAction<string>) => void,
    description: string,
    setDescription: (value: React.SetStateAction<string>) => void,
    date: string,
    setDate: (value: React.SetStateAction<string>) => void,
    completed: boolean,
    setCompleted: (value: React.SetStateAction<boolean>) => void,
    important: boolean,
    setImportant: (value: React.SetStateAction<boolean>) => void,
    todoList: Task[],
    setTodoList: (value: React.SetStateAction<Task[]>) => void }) {

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "title") {
      props.setTitle(event.target.value);
    }
    if (event.target.name === "description"){
      props.setDescription(String(event.target.value));
    }
    if (event.target.name === "date") {
      props.setDate(String(event.target.value));
    }
    if (event.target.name === "completed") {
      props.setCompleted(Boolean(event.target.value));
    }
    if (event.target.name === "important") {
      props.setImportant(Boolean(event.target.value));
    }
  };

  const [showModal, setShowModal] = useState(false);

  const addTask = (): void => {
    const newTask = { title: props.title, description: props.description, date: props.date, completed: props.completed, important: props.important};
    props.setTodoList([...props.todoList, newTask]);
    props.setTitle("");
    props.setDescription("");
    props.setDate("");
    props.setCompleted(false);
    props.setImportant(false);
    setShowModal(false);
  };

  return (
    <>
    <button onClick={() => setShowModal(true)} className='rounded-xl text-slate-300 bg-sky-600 hover:bg-sky-700 mt-3 mr-3
        small:h-12 md:h-18 lg:h-18
        small:w-28 md:w-36 lg:w-48
        small:text-xs md:text-base lg:text-xl'
    >
        New task
    </button>
  {showModal ? (
    <>
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                            value={props.title}
                            onChange={handleChange}
                            className="w-full rounded"
                        />
                        </label>
                        <label>
                        Date
                        <input
                            type="date"
                            className="w-full"
                            name="date"
                            value={props.date}
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
                            value={props.description}
                            onChange={({ target }) => props.setDescription(target.value)}
                        ></textarea>
                        </label>
                        <InputCheckbox
                          isChecked={props.completed}
                          setChecked={props.setCompleted}
                          label="Mark as completed"
                        />
                        <InputCheckbox
                          isChecked={props.important}
                          setChecked={props.setImportant}
                          label="Mark as important"
                        />
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

export default ModalCreateTask;