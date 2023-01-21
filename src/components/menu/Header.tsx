// import { useState } from 'react'
import { Flex, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function Header() {
    return (
        <Flex>
            <Flex className='mt-4 w-1/12 ml-3 justify-center'>
                <IconButton aria-label={'Open Menu'} icon={<HamburgerIcon />} colorScheme='blue'/>
            </Flex>
            <Flex className='font-bold justify-center font-losAngeles text-6xl pt-3 w-full'>
                To-Do List
            </Flex>
            <button className='rounded-xl text-slate-300 bg-sky-600 hover:bg-sky-700 mt-3 mr-3
                small:h-12 md:h-18 lg:h-18
                small:w-28 md:w-36 lg:w-48
                small:text-xs md:text-base lg:text-xl'
            >
                New task
            </button>
        </Flex>
    );
}

export default Header;