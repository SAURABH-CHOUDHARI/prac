import  { useEffect, useRef, useState } from 'react'

const App = () => {
  
  const [y, setY] = useState(5)
  const [r, setR] = useState(0)
  const [x, setX] = useState(5)
  
  
  const imgRef = useRef(null)

  useEffect(() => {
    imgRef.current.style.top = y+'%'
    imgRef.current.style.left = x+'%'
    imgRef.current.style.rotate = r+'deg'
  }, [y,x,r])
  
  return (
    <div >
      <img ref={imgRef} src="https://www.nicepng.com/png/full/365-3657691_katrina-kaif-bollywood-heroine-bollywood-actors-beautiful-shorts.png" alt="" />
      <button onClick={()=>{
        setR(Math.random()*360)
        setX(Math.random()*90)
        setY(Math.random()*70)
      }}>Click here</button>
    </div>
  )
}

export default App