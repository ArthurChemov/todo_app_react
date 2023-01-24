import { Flex, Box, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import ModalCreateTask from "../utilities/ModalCreateTask";
import Sidebar from './Sidebar';
import Main from './Main';

function Body () {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Flex className=' h-full flex-col'>
            <Flex className='flex-row'>
                <Flex className='mt-4 justify-center small:ml-3 small:w-1/12 small:visible md:ml-0 md:w-0 md:invisible'>
                    <IconButton aria-label={'Open Menu'} icon={sidebar ? <CloseIcon />:<HamburgerIcon />} colorScheme='blue' onClick={showSidebar}/>
                </Flex>
                <Flex className='font-bold justify-center font-losAngeles text-6xl pt-3 w-full'>
                    To-Do List
                </Flex>
                <Flex>
                    <ModalCreateTask onClose={ () => { } } onConfirm={() => { } }/>
                </Flex>
            </Flex>
            <Flex className=' h-full w-full flex-row relative'>
                <Box className={` md:w-52 lg:w-60 md:visible ${sidebar ? 'w-2/6 visible':'w-0 invisible'}`} >
                    <Sidebar/>
                </Box>
                <Main/>
            </Flex>
        </Flex>
    );
}

export default Body;