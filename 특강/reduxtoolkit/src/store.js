import { configureStore, createSlice } from '@reduxjs/toolkit'

let user= createSlice({
    name:'user',
    initialState: {
        name: 'minji',
        age: 24,
    },
    reducers:{
        changeName(state){
            state.name='ham'
        },
    }
})

let user2 = createSlice({
    name:'user2',
    initialState: {
        name: 'minji2',
        age: 20,
    },
    reducers:{
        changeAge(state){
            state.age ++;
        },
    }
})

export let {changeName} = user.actions
export let {changeAge} = user2.actions


export default configureStore({
  reducer: {
    user : user.reducer,
    user2 : user2.reducer,
   }
})