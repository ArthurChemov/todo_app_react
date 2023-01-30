import { Flex, Box, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { Task } from "../utilities/interfaces";
import AllTasks from "../routes/AllTasks";
import SearchTask from "../routes/SearchTask";
import CompleteFirst from "../sort/CompleteFirst";
import UncompleteFirst from "../sort/UncompleteFirst";
import MinDateFirst from "../sort/MinDateFirst";
import MaxDateFirst from "../sort/MaxDateFirst";

function Main (
    props: {
      sidebar: boolean,
      todoList: Task[],
      setTodoList: (value: React.SetStateAction<Task[]>) => void }) {
    const [grid, setGrid] = useState<boolean>(false)

    const [isSorted, setIsSorted] = useState<boolean>(false)
    const [minDate, setMinDate] = useState<boolean>(false)
    const [maxDate, setMaxDate] = useState<boolean>(false)
    const [complete, setComplete] = useState<boolean>(false)
    const [uncomplete, setUncomplete] = useState<boolean>(false)

    const [isSearch, setIsSearch] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')

    const handleSorted = (value: string) => {
        console.log(value)
        setIsSorted(true)
        if (value === "min-date") {
          setMaxDate(false);
          setComplete(false);
          setUncomplete(false);
          setMinDate(true);
        }
        if (value === "max-date"){
            setMinDate(false);
            setComplete(false);
            setUncomplete(false);
            setMaxDate(true);
        }
        if (value === "completed-first") {
            setMinDate(false);
            setMaxDate(false);
            setUncomplete(false);
            setComplete(true);
        }
        if (value === "uncompleted-first") {
            setMinDate(false);
            setMaxDate(false);
            setComplete(false);
            setUncomplete(true);
        }
        if(value === "") {
            setIsSorted(false)
            setIsSearch(false)
        }
    }

    const handleSearch = (event: { target: { value: string; }; }) => {
        setIsSorted(false)
        setSearch(event.target.value)
        if (event.target.value !== '') setIsSearch(true)
        else if (event.target.value === '') setIsSearch(false)
    };

    const deleteTask = (taskIdToDelete: string): void => {
      props.setTodoList(
        props.todoList.filter((task: { id: string; }) => {
            if(task.id !== taskIdToDelete) return task.id
            else if(task.id === taskIdToDelete) return !task.id
        })
      );
    };

    const isCompleted = (taskId: string, completed: boolean): void => {
        props.setTodoList(
            props.todoList.filter((task: { id: string; completed: boolean }) => {
                if(task.id !== taskId) return task.id
                else if(task.id === taskId) {
                    task.completed = !completed
                    return task.id
                }
            })
        );
    };

    const isImportant = (taskId: string, important: boolean): void => {
        props.setTodoList(
            props.todoList.filter((task: { id: string; important: boolean }) => {
                if(task.id !== taskId) return task.id
                else if(task.id === taskId) {
                    task.important = !important
                    return task.id
                }
            })
        );
    };

    return (
        <Flex className={` w-full flex-col md:ml-[208px] lg:ml-[240px] ${props.sidebar ? 'small:ml-[110px]':'small:ml-0'}`}>
            <Box className="small:w-full md:w-1/3 lg:w-2/5">
                <form className=" relative pt-6 mx-3" autoComplete="off">
                    <label htmlFor="search" className="sr-only"></label>
                    <input type="search" id="search" placeholder="Search task" className=" small: w-full h-8 md:max-w-1/3 lg:max-w-2/5 rounded-md inputStyles pl-2" onChange={handleSearch}/>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute small:w-3 small:top-9 md:w-4 md:top-8 right-4 text-slate-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>
                </form>
            </Box>
            <Flex className=" mt-3 flex-row justify-between">
                <Flex className=" ml-3 gap-2 items-center">
                    <button title="view in list" className=" w-6 h-6" onClick={() => setGrid(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" className={` w-6 h-6 hover:text-sky-700  ${grid ? '':'text-sky-600'}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                        </svg>
                    </button>
                    <button title="view in grid" className=" w-6 h-6" onClick={() => setGrid(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="{1.5}" stroke="currentColor" className={` w-6 h-6 hover:text-sky-700  ${grid ? 'text-sky-600':''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"></path>
                        </svg>
                    </button>
                </Flex>
                <Flex className=" mr-3">
                    <Select backgroundColor='white' color='#A0AEC0' className="ml-auto inputStyles" onChange={(value) => handleSorted(value.target.value)}>
                        <option value="" className="bg-slate-100 ">Sort by</option>
                        <option value="min-date" className="bg-slate-100 ">Earlier first</option>
                        <option value="max-date" className="bg-slate-100 ">Later first</option>
                        <option value="completed-first" className="bg-slate-100 ">Completed first</option>
                        <option value="uncompleted-first" className="bg-slate-100 ">Uncompleted first</option>
                    </Select>
                </Flex>
            </Flex>
            <Box className=" mx-3">
                {isSorted ? (
                    <>
                    {minDate ? (
                        <>
                        <MinDateFirst grid={grid} todoList={props.todoList} setTodoList={props.setTodoList} deleteTask={deleteTask} isCompleted={isCompleted} isImportant={isImportant}/>
                        </>) : null}
                    {maxDate ? (
                        <>
                        <MaxDateFirst grid={grid} todoList={props.todoList} setTodoList={props.setTodoList} deleteTask={deleteTask} isCompleted={isCompleted} isImportant={isImportant}/>
                        </>) : null}
                    {complete ? (
                        <>
                        <CompleteFirst grid={grid} todoList={props.todoList} setTodoList={props.setTodoList} deleteTask={deleteTask} isCompleted={isCompleted} isImportant={isImportant}/>
                        </>) : null}
                    {uncomplete ? (
                        <>
                        <UncompleteFirst grid={grid} todoList={props.todoList} setTodoList={props.setTodoList} deleteTask={deleteTask} isCompleted={isCompleted} isImportant={isImportant}/>
                        </>) : null}
                    </>
                ) : (
                    <>
                    {isSearch ? (
                        <>
                        <SearchTask grid={grid} search={search} todoList={props.todoList} setTodoList={props.setTodoList} deleteTask={deleteTask} isCompleted={isCompleted} isImportant={isImportant}/>
                        </>
                    ) : (
                        <>
                        <AllTasks grid={grid} todoList={props.todoList} setTodoList={props.setTodoList} deleteTask={deleteTask} isCompleted={isCompleted} isImportant={isImportant}/>
                        </>
                    )}
                    </>
                )}
            </Box>
        </Flex>
    );
}

export default Main;