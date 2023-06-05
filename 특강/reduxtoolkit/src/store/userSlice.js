
import { createSlice } from '@reduxjs/toolkit'

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
    initialState: [{
        name: 'count',
        count : 1
    },{
        name: 'ctowt',
        count : 2
    }],
    reducers:{
        addCount(state, action){
            state[action.payload].count++;
        },
        subCount(state, action){
            state[action.payload].count--
        }
    }
})

export let {changeName} = user.actions
export let {addCount,subCount} = user2.actions

export {user, user2} 