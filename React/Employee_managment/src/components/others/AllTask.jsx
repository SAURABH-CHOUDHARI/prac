import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    66

    const authData = useContext(AuthContext)

    console.log(authData.employees);

    return (
        <div className='bg-zinc-900 p-5 mt-5  '>
            <div className='  px-4 flex text-center items-center rounded justify-between mb-2'>
                <h2 className='text-lg bg-black w-1/6 py-2 rounded'>Name</h2>
                <h3 className='text-lg bg-black w-1/6 py-2 rounded'>New Task</h3>
                <h5 className='text-lg bg-blue-900 w-1/6 py-2 rounded'>Active Task</h5>
                <h5 className='text-lg bg-emerald-600 w-1/6 py-2 rounded'>Completed Task</h5>
                <h5 className='text-lg bg-red-600 w-1/6 py-2 rounded'>Failed</h5>
            </div>


            {authData.employees.map((elem, idx) => {
                return <div key={idx} className='bg-zinc-950 py-2 px-4 flex rounded text-center justify-between mb-2'>
                    <h2 className='text-lg w-1/6  rounded'>{elem.firstName}</h2>
                    <h3 className='text-lg w-1/6  rounded'>{elem.taskStatus.new}</h3>
                    <h5 className='text-lg w-1/6 text-blue-900 rounded'>{elem.taskStatus.active}</h5>
                    <h5 className='text-lg w-1/6 text-emerald-600 rounded'>{elem.taskStatus.completed}</h5>
                    <h5 className='text-lg w-1/6 text-red-600 rounded'>{elem.taskStatus.failed}</h5>
                </div>

            })}





        </div>
    )
}

export default AllTask