import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: []
}
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state,action) => {
            state.tasks.push(action.payload);
            console.log(state.tasks)
        },
        remove : (state,action) => {
            state.tasks.splice(action.payload,1) 
        },
        update : (state,action) => {
            
            state.tasks[action.payload].done = !state.tasks[action.payload].done
        }
    
    }

    
})



export default tasksSlice.reducer;
export const { add ,remove ,update} = tasksSlice.actions;