import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: []
}
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        add: (state, action) => {
            state.tasks.push(action.payload);
            console.log(state.tasks)
        },
        remove: (state, action) => {
            state.tasks.splice(action.payload, 1)
        },
        update: (state, action) => {

            state.tasks[action.payload].done = !state.tasks[action.payload].done
        },
        edit: (state, action) => {

            state.tasks[action.payload].edit = !state.tasks[action.payload].edit
        },
        editname: (state,action) => {
            const {id, editText} = action.payload
            console.log(action.payload)

            state.tasks[id].name = editText; 
        }


    }


})



export default tasksSlice.reducer;
export const { add, remove, update, edit ,editname } = tasksSlice.actions;