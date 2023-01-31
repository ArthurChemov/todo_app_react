import { Flex, Box, Text } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import { useDate } from '../utilities/useDate';

function Sidebar(
    props: {
      side: boolean,
      importantSide: boolean,
      completeSide: boolean,
      uncompleteSide: boolean,
      setSide: (value: React.SetStateAction<boolean>) => void,
      setImportantSide: (value: React.SetStateAction<boolean>) => void,
      setCompleteSide: (value: React.SetStateAction<boolean>) => void,
      setUncompleteSide: (value: React.SetStateAction<boolean>) => void
    }) {
    let link: string = "";

    return (
        <Flex className='small:w-[110px] md:w-full h-full items-start flex-col pt-6 ml-2 justify-between'>
            <Box className=" font-serif">
                <nav className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500 text-slate-300
                small: text-xs md:text-base lg:text-xl
                small:w-full  md:w-full    lg:w-full'>
                    <NavLink to='/components/'><div onClick={() => { link = 'all';
                props.setSide(false)
                props.setImportantSide(false)
                props.setCompleteSide(false)
                props.setUncompleteSide(false)}}>All tasks</div> </NavLink>
                </nav>
                <nav className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500 text-slate-300
                small: text-xs md:text-base lg:text-xl
                small:w-full  md:w-full    lg:w-full'>
                    <NavLink to='/components/routes/ImportantTasks'><div onClick={() => { link = 'important';
                props.setSide(true)
                props.setCompleteSide(false)
                props.setUncompleteSide(false)
                props.setImportantSide(true)}}>Important tasks</div> </NavLink>
                </nav>
                <nav className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500 text-slate-300
                small: text-xs md:text-base lg:text-xl
                small:w-full  md:w-full    lg:w-full'>
                    <NavLink to='/components/routes/CompletedTasks'><div onClick={() => { link = 'complete';
                props.setSide(true)
                props.setImportantSide(false)
                props.setUncompleteSide(false)
                props.setCompleteSide(true)}}>Completed tasks</div> </NavLink>
                </nav>
                <nav className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500 text-slate-300
                small: text-xs md:text-base lg:text-xl
                small:w-full  md:w-full    lg:w-full'>
                    <NavLink to='/components/routes/UncompletedTasks'><div onClick={() => {link = 'uncomplete';
                props.setSide(true)
                props.setImportantSide(false)
                props.setCompleteSide(false)
                props.setUncompleteSide(true)}}>Uncompleted tasks</div> </NavLink>
                </nav>
            </Box>
            <Text className=" text-center pb-5 text-cyan-400 font-mono">
                {useDate().date}
                <br />
                {useDate().time}
            </Text>
        </Flex>
    );
}

export default Sidebar;