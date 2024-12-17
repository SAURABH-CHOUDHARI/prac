import { useState } from "react"
import Card from "./Components/Card"
import { Switch } from "@/components/ui/switch"


const App = () => {
  const [arr, setArr] = useState([])
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [img, setImg] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()


    const obj = {
      name: name,
      description: desc,
      image: img
    };


    setArr([...arr, obj]);

    setName('')
    setDesc('')
    setImg('')

  }

  return (
    <main className=" px-20 flex flex-col w-screen items-center ">
      <div className=" py-5 w-full flex justify-center">
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className="flex flex-col gap-10 items-center bg-white rounded-3xl px-20 py-5"
        >
          <div className="flex flex-col gap-5 items-center">



            <input onChange={(e) => {
              setName(e.target.value)
            }} type="text" placeholder='Name' value={name} required id="name"
              className="border-solid border-2 border-black h-10 rounded-2xl "
            />


            <input onChange={(e) => {
              setDesc(e.target.value)
            }} type="text" placeholder='Description' value={desc} required id="desc"
              className="border-solid border-2 border-black h-10 rounded-2xl "
            />


            <input onChange={(e) => {
              setImg(e.target.value)
            }} type="text" placeholder='Img' value={img} required id="image"
              className="border-solid border-2 border-black h-10 rounded-2xl "
            />
            <Switch />

          </div>
          <button className="border-solid border-2 border-black w-40 py-5 rounded-3xl bg-green-400">submit</button>
        </form>
      </div>
      <div className=" w-screen px-20 py-5 flex flex-wrap gap-10 ">
        {arr.map((obj, idx) => (
          <Card key={idx} id={obj} />
        ))}
      </div>

    </main>
  )
}

export default App  