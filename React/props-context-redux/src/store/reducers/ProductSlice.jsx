import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        add: (state,action) => {
            state.products = action.payload;
        },
        remove: (state,action) => {
            state.products.pop()
        }
    }

    
})



export default productSlice.reducer;
export const { add ,remove } = productSlice.actions;