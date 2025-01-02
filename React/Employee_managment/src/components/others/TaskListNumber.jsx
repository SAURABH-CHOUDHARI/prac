import React from 'react'

const TaskListNumber = ({data}) => {
    return (
        <div className="flex mt-10 screen justify-between gap-5">
            <div className='rounded-xl w-[45%] py-6 px-9 bg-zinc-800 '>
                <h2 className='text-3xl text-center font-semibold'>{data.taskStatus.new}</h2>
                <h3 className='text-xl text-center font-medium'>New Task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-zinc-800 '>
                <h2 className='text-3xl text-center font-semibold'>{data.taskStatus.active}</h2>
                <h3 className='text-xl text-center font-medium'>Accepted Task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-zinc-800 '>
                <h2 className='text-3xl text-center font-semibold'>{data.taskStatus.failed}</h2>
                <h3 className='text-xl text-center font-medium'>Failed Task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-zinc-800 '>
                <h2 className='text-3xl text-center font-semibold'>{data.taskStatus.completed}</h2>
                <h3 className='text-xl text-center font-medium'>Completed Task</h3>
            </div>
            
        </div>
    )
}

export default TaskListNumber