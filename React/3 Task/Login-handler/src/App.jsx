import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPass, setCheckPass] = useState('');

  const submitHandler = (e) => {
      e.preventDefault();

      if(name.length > 2 && password ==checkPass){
        console.log(name,email,password)
        setName("")
        setEmail("")
        setPassword("")
        setCheckPass("")
        alert("User Registered Successfully")
      }else{
        alert("Enter Valid Name and Password")
      }

  } 
  
  
  return (
    
    
    <div className='h-screen w-screen flex items-center justify-between bg-black'>  
      <div className='  mx-auto border-2 border-slate-800 '>
      <form className='flex flex-col gap-5 px-10 py-10' onSubmit={submitHandler} >
        <input required type="text" placeholder='Enter Your Name' onChange={(e) => {setName(e.target.value)}} value={name}/>
        <input required type="email" placeholder='Enter your Email' onChange={(e) => {setEmail(e.target.value)}} value={email}/>
        <input  required type="password" placeholder='Enter your Password' onChange={(e) => {setPassword(e.target.value)}} value={password}/>
        <input required  type="password" placeholder='Enter your PassWord Again' onChange={(e) => {setCheckPass(e.target.value)}} value={checkPass}/>
        <button className='bg-slate-900 hover:bg-slate-500 duration-500 active:scale-95 text-white py-2 rounded'>Register</button>
      </form>
      </div>
      </div>
  )
}

export default App