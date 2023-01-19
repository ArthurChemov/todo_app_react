
function Sidebar() {
    return (
        <aside className='h-full w-1/6 flex items-center flex-col font-serif pt-2'>
            <button className='rounded-2xl bg-sky-500 hover:bg-sky-600
                small:h-6 small:w-14 small:text-xs
                medium:h-9 medium:w-24 medium:text-base
                large:h-14 large:w-36 large:text-xl'
            >
                New task
            </button>
            <nav className='pt-6 ml-3 w-3/4 flex flex-col small:text-xs medium:text-base large:text-xl small:w-full medium:w-full large:w-3/4'>
                <a href='/' className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500'>All tasks</a>
                <a href='/' className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500'>Important tasks</a>
                <a href='/' className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500'>Completed tasks</a>
                <a href='/' className='mb-2 hover:text-red-500 hover:border-4 hover:border-transparent hover:border-r-red-500'>Uncompleted tasks</a>
            </nav>
        </aside>
    );
}

export default Sidebar;