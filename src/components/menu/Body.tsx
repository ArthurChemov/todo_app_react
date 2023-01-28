import { Flex, Box, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Task } from "../utilities/interfaces";
import Sidebar from './Sidebar';
import Main from './Main';
import ModalCreateTask from '../utilities/ModalCreateTask';

function Body () {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

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

    return (
        <Flex className=' h-full flex-col'>
            <Flex className='flex-row'>
                <Flex className='mt-4 justify-center small:ml-3 small:w-1/12 small:visible md:ml-0 md:w-0 md:invisible'>
                    <IconButton aria-label={'Open Menu'} icon={sidebar ? <CloseIcon />:<HamburgerIcon />} colorScheme='blue' onClick={showSidebar}/>
                </Flex>
                <Flex className='font-bold justify-center font-losAngeles pt-3 w-full small:text-4xl middle:text-6xl'>
                    To-Do List
                </Flex>
                <Box>
                    <ModalCreateTask title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate} completed={completed} setCompleted={setCompleted} important={important} setImportant={setImportant} todoList={todoList} setTodoList={setTodoList}/>
                </Box>
            </Flex>
            <Flex className=' h-full w-full flex-row relative'>
                <Box className={` md:w-52 lg:w-60 md:visible ${sidebar ? 'w-2/6 visible':'w-0 invisible'}`} >
                    <Sidebar/>
                </Box>
                <Main title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate} completed={completed} setCompleted={setCompleted} important={important} setImportant={setImportant} todoList={todoList} setTodoList={setTodoList}/>
            </Flex>
        </Flex>
    );
}

export default Body;