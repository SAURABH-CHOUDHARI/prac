import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault();

        handleLogin(email,password)
        setEmail('')
        setPassword('')

    }


    return (
        <div className='flex h-screen w-screen items-center justify-center '>
            <div className='border-2  border-zinc-700 '>
                <form className='flex flex-col items-center  gap-6 justify-center px-10 py-24'
                    onSubmit={submitHandler}
                >
                    <input required value={email}
                        className='border-2 outline-none  bg-transparent border-zinc-700 px-5 py-3 text-xl rounded-sm placeholder:text-gray-400'
                        type="email" placeholder='Enter your email'
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <input required value={password}
                        className='border-2  outline-none bg-transparent border-zinc-700 px-5 py-3 text-xl  rounded-sm placeholder:text-gray-400'
                        type="password" placeholder='Enter your password' 
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        />
                    <button
                        className='mt-10 outline-none w-full active:scale-95  bg-zinc-700 duration-500 hover:bg-emerald-500 px-5 py-3 text-xl rounded-sm placeholder:text-white'
                    >LOG IN</button>
                </form>

            </div>
        </div>
    )
}

export default Login