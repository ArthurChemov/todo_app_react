import { Flex, Box, Text } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { links } from '../utilities/Links';
import { useDate } from '../utilities/useDate';

function Sidebar() {

    return (
        <Flex className=' h-full items-start flex-col pt-6 ml-2 justify-between'>
            <Box className=" font-serif">
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
            <Text className=" text-center pb-5">
                {useDate().date}
                <br />
                {useDate().time}
            </Text>
        </Flex>
    );
}

export default Sidebar;