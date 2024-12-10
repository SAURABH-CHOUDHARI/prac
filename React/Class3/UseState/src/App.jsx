import  { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState(1)

 const increment = () => {
    setfirst(first+ 1)
};
  const decrement = () => {
    setfirst(first- 1)
};


return (
  <div>
    <h1>Number - {first}</h1>
    <button onClick={increment} >Increment</button>
    <button onClick={decrement} >decrement</button>
  </div>
)
}

export default App