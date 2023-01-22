import { Flex, Box, Text } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { links } from './Links';

function Sidebar() {
    return (
        <Flex className=' h-full items-center flex-col font-serif pt-6 ml-3 justify-between'>
            <Box>
                {links.map((item, index) => {
                    return (
                        <nav key={index} className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500 text-slate-300
                        small: text-xs md:text-base lg:text-xl
                        small:w-full  md:w-full    lg:w-full'>
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