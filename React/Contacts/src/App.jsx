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
      <div className='flex flex-col w-full px-10'>
      {submittedData.length === 0 ? (
  <div className='p-10'>
    <h1 className='text-5xl font-bold'>Contact List</h1>
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