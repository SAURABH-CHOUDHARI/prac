import { useState } from "react"


const App = () => {
  const [Name, setName] = useState("")
  const [Pos, setPos] = useState("")
  const [Arr, setArr] = useState([])

  const formHandler = (e) => {
    e.preventDefault()

    const newObj = {Name , Pos}
    setArr([...Arr, newObj])

    setName("")
    setPos("")
  }

  return (
    <div >
      <form className="p-10" onSubmit={(e) => {
        formHandler(e)
      }}>``
        <input type="text" 
        value={Name} 
        onChange={(e) => {
        setName(e.target.value)
        }} placeholder="Enter Your Name " className="border-black border-2 rounded px-4 py-2" />
        <input type="text" 
        value={Pos} 
        onChange={(e) => {
          setPos(e.target.value)
        }} placeholder="Enter Your Designation" className="border-black border-2 rounded ml-5 px-4 py-2"/>
        <div className="mt-4">
        <button className="bg-black text-white px-4 py-2 rounded">Submit</button>
        </div>
      </form>
        <div>
          {Arr.map((elem, idx) => (
            <div key={idx} className="bg-sky-300 flex justify-between p-10 mt-1">
              <h1 className="text-2xl font-bold text-white">{elem.Name}</h1>
              <h2 className="text-2xl font-bold text-white">{elem.Pos}</h2>
            </div>
          ))}
        </div>
    </div>
  )
}

export default App