import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        add: (state,action) => {
            state.products.push(action.payload);
        },
    }

    
})



export default productSlice.reducer;
export const { add } = productSlice.actions;