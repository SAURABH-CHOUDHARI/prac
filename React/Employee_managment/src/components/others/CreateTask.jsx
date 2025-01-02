import { data } from 'autoprefixer'
import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [asignTo, setAsignTo] = useState("")
    const [category, setCategory] = useState("")
    const [newtask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: true, completed: false })
        const data = JSON.parse(localStorage.getItem('employees'))

        data.forEach((elem) =>{
            if(asignTo == elem.firstName){
                elem.tasks.push(newtask)
                
            }
        })
        localStorage.setItem('employees',JSON.stringify(data))
        
        setAsignTo("")
        setCategory("")
        setTaskDate("")
        setTaskDescription("")
        setTaskTitle("")
    }
    
    

    return (
        <div className='p-5 bg-zinc-900 mt-7 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>

                <div className='w-1/2 '>
                    <div >
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder='Make A UI design'
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none text-gray-300 bg-transparent border-[1px] border-gray-400 mb-4 calender" type="date"
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder='Employee Name'
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder='design, dev , etc'
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                        />
                    </div>
                </div>


                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className="w-full h-44 text-sm px-4 py-2 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                    ></textarea>
                    <button
                        className='bg-emerald-500 py-3 hover:bg-emerald-600 active:scale-95 rounded duration-300 text-sm mt-4 w-full'
                    >Create Task</button>
                </div>


            </form>
        </div>
    )
}

export default CreateTask