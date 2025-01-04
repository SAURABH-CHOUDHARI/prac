import { useEffect } from 'react'
// import One from './components/one'
// import Two from './components/Two'
import { asynGetProducts } from './store/actions/ProductActions'
import { useDispatch, useSelector } from 'react-redux'





const App = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products)

  useEffect(() => {
    products.length == 0 && dispatch(asynGetProducts());
  },[]);

  return (
    <div>
      {/* <One /> */}
      {/* <Two /> */}
    </div>
  )
}

export default App