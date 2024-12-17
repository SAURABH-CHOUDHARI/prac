import { useState } from "react"
import Form from "./Components/form"
import Card from "./Components/Card"

const App = () => {
  const [arr, setArr] = useState([])

  const getUSer = (user) => {
    
    setArr([...arr , user])
  }

  const deleteUSer = (idx) => {
    const copy = [...arr]

    copy.splice(idx,1)
    setArr(copy)
  }

  return (
    <div>
      <Form getuser={getUSer}/>
      <div className="px-10 bg-zinc-800 flex flex-wrap gap-10  justify-center">
        {arr.map((user, idx) => (
          <Card key={idx} User={user} id={idx} deleteUser={deleteUSer}/>
        ))}
      </div>

    </div>
  )
}

export default App