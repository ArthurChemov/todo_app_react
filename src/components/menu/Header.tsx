// import { useState } from 'react'
import { Flex, IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function Header() {
    return (
        <header>
            <Flex>
            <Flex className='mt-4 w-1/12 ml-3 justify-center'>
                <IconButton aria-label={'Open Menu'} icon={<HamburgerIcon />} colorScheme='blue'/>
            </Flex>
            <Flex className='font-bold justify-center font-losAngeles text-6xl pt-3 w-full'>
                To-Do List
            </Flex>
            <button className='rounded-xl text-slate-300 bg-sky-600 hover:bg-sky-700 mt-3 mr-3
                small:h-12 small:w-28 small:text-xs
                medium:h-18 medium:w-36 medium:text-base
                large:h-18 large:w-48 large:text-xl'
            >
                New task
            </button>
            </Flex>
        </header>
    );
}

export default Header;