import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between bg-orange-400 items-center fixed w-full top-0 left-0 px-10 text-2xl py-5'>
            <h1 className='text-3xl'>Sheriyans </h1>
            <div className='flex gap-10'>
                <Link to="/">Home</Link>
                <Link to="/Courses">Courses</Link>
                <Link to="/Kodr">Kodr</Link>
                <Link to="/About">About</Link>
            </div>
        </div>
    )
}

export default Navbar