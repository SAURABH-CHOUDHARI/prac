import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/reducers/ProductSlice'


const Two = () => {
    const [counter, setCounter] = useState(0)
    const {products } = useSelector(state => state.products)
    const dispatch = useDispatch()
    console.log(products);

    const addData = () => {
        let num = counter;
        num++
        setCounter(num)

        dispatch(add(num));
    }

    return (
        <div>
            <h1>two</h1>
            <button onClick={addData}>Add</button>
        </div>
    )
}

export default Two