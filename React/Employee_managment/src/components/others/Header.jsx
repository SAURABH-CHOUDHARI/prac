import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = ({changeUser}) => {

    const [userName, setUserName] = useState('')

    // if(){
    //     setUserName("Admin")
    // }else{
    //     setUserName("")
    // }


    const logOutUser = () => {
        localStorage.setItem('loggedInUser','' )
        changeUser('')
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium '>Hello <br /> <span className='text-3xl font-semibold'>userName 👋</span> </h1>
            <button
                className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'
                onClick={logOutUser}
            >Log out</button>
        </div>
    )
}

export default Header