import { Flex, Box, IconButton } from '@chakra-ui/react'
import { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Task } from "../utilities/interfaces";
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
    const [id, setId] = useState<string>(Date.now().toString());
    const [todoList, setTodoList] = useState<Task[]>([]);

    return (
        <Flex className=' h-full flex-col'>
            <Flex className='flex-row'>
                <Flex className='mt-4 justify-center small:ml-3 small:w-1/12 small:visible md:ml-0 md:w-0 md:invisible'>
                    <IconButton aria-label={'Open Menu'} icon={sidebar ? <CloseIcon />:<HamburgerIcon />} colorScheme='blue' onClick={showSidebar}/>
                </Flex>
                <Flex className='font-bold justify-center font-losAngeles pt-3 w-full small:text-3xl middle:text-6xl'>
                    To-Do List
                </Flex>
                <Box>
                    <ModalCreateTask title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate} completed={completed} setCompleted={setCompleted} important={important} setImportant={setImportant} id={id} setId={setId} todoList={todoList} setTodoList={setTodoList}/>
                </Box>
            </Flex>
            <Main sidebar={sidebar} todoList={todoList} setTodoList={setTodoList}/>
        </Flex>
    );
}

export default Body;