import { Box, Stack } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
// import { links } from './Links';

function Sidebar() {
    return (
        <Box className='w-1/6 flex items-center flex-col font-serif pt-2'>
            <Stack className='pt-6 ml-3 w-3/4
                small:text-xs medium:text-base large:text-xl
                small:w-full  medium:w-full    large:w-3/4'
            >
                <NavLink to='/' className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500'>All tasks</NavLink>
                <NavLink to='/' className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500'>Important tasks</NavLink>
                <NavLink to='/' className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500'>Completed tasks</NavLink>
                <NavLink to='/' className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500'>Uncompleted tasks</NavLink>
            </Stack>
        </Box>
    );
}

export default Sidebar;