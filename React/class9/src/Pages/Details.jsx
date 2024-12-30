import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
    return (
        <div className='text-4xl flex h-screen w-screen justify-center items-center'>
            <h1>{id}'s Details</h1>
        </div>
    )
}

export default Details