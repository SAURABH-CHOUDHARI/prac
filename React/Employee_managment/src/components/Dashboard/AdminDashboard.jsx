import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = ({changeUser}) => {
    return (
        <div className='h-screen w-screen p-7'>
            <Header changeUser={changeUser}/>
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard