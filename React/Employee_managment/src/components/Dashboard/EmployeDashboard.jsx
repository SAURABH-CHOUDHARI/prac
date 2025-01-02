import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeDashboard = ({data,changeUser}) => {
    
    return (
        <div className='p-10  h-screen'>
            <Header changeUser={changeUser} data={data}/>
            <TaskListNumber data={data}/>
            <TaskList data={data}/>
        </div>
    )
}

export default EmployeDashboard