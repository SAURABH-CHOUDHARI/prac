
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add ,remove , update } from './store/reducers/TaskSlice'

const App = () => {
  const [taskName, setNewtask] = useState('')
  const [isDone] = useState(false)


  const { tasks } = useSelector(state => state.tasks)
  const dispatch = useDispatch();

  const updateTask = (id) => {
    dispatch(update(id))
  }

  const deleteTask = (id) => {
    dispatch(remove(id))
  }
  const addTask = (task) => {

    let obj = {name: task ,done: isDone}

    dispatch(add(obj))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if(taskName.length > 0) addTask(taskName);
    
    setNewtask('')
  }


  return (
    <div className='min-h-screen bg-black flex items-center flex-col justify-start p-10'>
      <form
        className='flex flex-col items-center'
        onSubmit={submitHandler}
      >
        <input type="text" placeholder='Enter your Task...' value={taskName} onChange={(e) => { setNewtask(e.target.value) }}
          className='bg-slate-700 outline-none py-2 w-96 px-5 rounded text-gray-100 shadow-inner shadow-red-500'
        />
        <button className=' w-1/2 bg-gray-200 mt-5 py-2 rounded active:scale-95 duration-100 shadow-red-500 shadow-lg font-semibold'>Add Task</button>
      </form>
      <div className='mt-10 w-[40rem] h-[40rem] overflow-scroll scrollbar py-2 rounded px-4 bg-slate-900 text-2xl font-medium text-gray-100 shadow-inner shadow-red-500'>
        {tasks.map((task,key)=>(
          <div key={key}  className='flex my-5 rounded justify-between px-2 py-2 items-center bg-slate-800'>
            <h1 >{task.name}</h1>
            <div className='flex gap-2 '>
            <button id={key} className={`bg-zinc-800 text-lg px-2 py-1 rounded active:scale-95 ${task.done ? '  bg-green-600' : 'bg-slate-950'}`}
            onClick={(e) => {updateTask(e.target.id)}}
            >{task.done ? 'Done' : 'Pending'}</button>
            <button id={key} className='bg-red-500 text-lg px-2 py-1 rounded active:scale-95'
            onClick={(e) => {deleteTask(e.target.id)}}
            >delete</button>
            </div>
          </div> 
        ))}
      </div>
    </div>
  )
}

export default App