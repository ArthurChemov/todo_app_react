import { Flex, Box } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { links } from './Links';

function Sidebar() {
    return (
        <Flex className='w-1/6 flex items-center flex-col font-serif pt-2'>
            <Box className='pt-6 ml-3 w-3/4
                small:text-xs medium:text-base large:text-xl
                small:w-full  medium:w-full    large:w-3/4'
            >
                {links.map((item, index) => {
                    return (
                        <nav key={index} className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500'>
                        <NavLink to={item.path}>
                            <span>{item.name}</span>
                        </NavLink>
                        </nav>
                    );
                })}
            </Box>
        </Flex>
    );
}

export default Sidebar;