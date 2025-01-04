import { add } from "../reducers/ProductSlice"


export const asynGetProducts = () => async (dispatch, getstate) => {
    try{
        const repsonse = await fetch('https://fakestoreapi.com/products');
        const data = await repsonse.json();
        dispatch(add(data));
    }catch (error){
        console.log(error); 
    }

}