import React from 'react'

const AcceptTask = ({data}) => {

    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-500 rounded-xl'>
                <div className="flex justify-between itmes-center">
                    <h3 className='bg-red-600 px-3 py-1 rounded-xl '>high</h3>
                    <h4 className='text-base'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
                <p className='text-sm mt-2'>{data.taskDescription}</p>
                <div className=' mt-4 '>
                    <button className='bg-green-500 py-1 px-2 text-sm '>Accept Task</button>
                </div>
            </div>
    )
}

export default AcceptTask