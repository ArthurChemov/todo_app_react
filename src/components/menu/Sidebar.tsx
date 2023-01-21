import { Flex, Box } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { links } from './Links';

function Sidebar() {
    return (
        <Flex className=' h-full w-full fixed items-start flex-row'>
            <Flex className='w-1/6 items-center flex-col font-serif pt-6 ml-3'
            >
                {links.map((item, index) => {
                    return (
                        <nav key={index} className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500
                        small:text-xs medium:text-base large:text-xl
                        small:w-full  medium:w-full    large:w-3/4'>
                        <NavLink to={item.path}>
                            <span>{item.name}</span>
                        </NavLink>
                        </nav>
                    );
                })}
            </Flex>
        </Flex>
    );
}

export default Sidebar;