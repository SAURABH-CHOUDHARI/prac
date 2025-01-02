import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {


    return (
        <div className='h-[55%] scrollbar overflow-x-auto w-full py-5 mt-10 flex justify-start gap-10 items-center flex-nowrap '>
            {data.tasks.map((elem,idx) => {
                if(elem.active){
                    return <AcceptTask key={idx} data={elem}/>
                }
                if(elem.newTask){
                    return <NewTask key={idx} data={elem} />
                }
                if(elem.failed){
                    return <FailedTask key={idx} data={elem} />
                }
                if(elem.completed){
                    return <CompleteTask key={idx} data={elem}/>
                }
            })}




        </div>
    )
}

export default TaskList