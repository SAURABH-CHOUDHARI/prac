import React, { useState } from 'react'
import One from './components/one'
import Two from './components/Two'

const App = () => {
  const [data, setData] = useState('Hello')
  return (
    <div>
      <One data={data}/>
      <Two data={data}/>
    </div>
  )
}

export default App