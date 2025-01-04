import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add ,asyncremove } from '../store/actions/ProductActions'


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
    const removeHandler = () => {
        dispatch(asyncremove());
    }

    return (
        <div>
            <h1>two</h1>
            <button onClick={addData}>Add</button>
            <button onClick={removeHandler}>Remove</button>
        </div>
    )
}

export default Two