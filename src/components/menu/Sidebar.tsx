import { Flex, Box, Select } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { links } from './Links';

function Sidebar() {
    return (
        <Flex className=' h-full w-full fixed items-start flex-row'>
            <Flex className='w-1/6 items-center flex-col font-serif pt-6 ml-3'>
                {links.map((item, index) => {
                    return (
                        <nav key={index} className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500 text-slate-300
                        small:text-xs md:text-base lg:text-xl
                        small:w-full  md:w-full    lg:w-3/4'>
                        <NavLink to={item.path}>
                            <span>{item.name}</span>
                        </NavLink>
                        </nav>
                    );
                })}
            </Flex>
            <Flex className=" w-full flex-col">
                <Box className="small:w-full md:w-1/4 lg:w-1/6">
                    <form className=" relative pt-6 mx-3" autoComplete="off">
                        <label htmlFor="search" className="sr-only"></label>
                        <input type="search" id="search" placeholder="Search task" className=" small: w-full h-8 md:max-w-xs rounded-md inputStyles pl-2"/>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="absolute small:w-3 small:top-9 md:w-4 md:top-8 right-4 text-slate-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                        </svg>
                    </form>
                </Box>
                <Flex className=" mt-3 flex-row justify-between">
                    <Flex className=" ml-3 gap-2 items-center">
                        <button title="view in list" className=" w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" className=" w-6 h-6 hover:text-sky-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                            </svg>
                        </button>
                        <button title="view in grid" className=" w-6 h-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="{1.5}" stroke="currentColor" className=" w-6 h-6 hover:text-sky-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"></path>
                            </svg>
                        </button>
                    </Flex>
                    <Flex className=" mr-3">
                        <Select backgroundColor='white' color='#A0AEC0' className="ml-auto inputStyles">
                            <option value="" hidden>Sort by</option>
                            <option value="min-date" className="bg-slate-100 dark:bg-slate-800">Earlier first</option>
                            <option value="max-date" className="bg-slate-100 dark:bg-slate-800">Later first</option>
                            <option value="completed-first" className="bg-slate-100 dark:bg-slate-800">Completed first</option>
                            <option value="uncompleted-first" className="bg-slate-100 dark:bg-slate-800">Uncompleted first</option>
                        </Select>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Sidebar;