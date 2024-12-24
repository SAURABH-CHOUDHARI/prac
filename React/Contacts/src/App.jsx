import Form from './Components/Form'
import Card from './Components/Card'
import { useState } from 'react'

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const DeleteHandler = (idx) => {
    const copy = [...submittedData]

    copy.splice(idx,1)
    setSubmittedData(copy)

  }
  
  return (
    <div className='flex '>
      <Form setSubmittedData={setSubmittedData} submittedData={submittedData}/>
      <div className='flex flex-col w-full px-10 bg-slate-900 grid-rows-4 text-white'>
        <h1 className=' mt-5 text-5xl font-bold animate-bounce'>Contact List</h1>
      {submittedData.length === 0 ? (
  <div className='p-10'>
    <p className='text-lg mt-5 ml-5'>No Contact added yet</p>
  </div>
) : (
  <Card submittedData={submittedData} DeleteHandler={DeleteHandler} />
)}
      </div>
    </div>
  )
}

export default App