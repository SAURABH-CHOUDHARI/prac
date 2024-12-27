import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-10 text-2xl py-5'>
            <h1 className='text-3xl'>Sheriyans </h1>
            <div className='flex gap-10'>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Product">Product</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar