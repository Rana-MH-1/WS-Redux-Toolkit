import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter : 0
}

const CounterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        Increment : (state)=>{
            state.counter++ 
        },
        Decrement : (state)=>{
            if(state.counter>0){
                state.counter--
            }
            
        },
        INCREMENT_WITH_Value : (state,action)=>{
            state.counter += action.payload
        },
        Reset : (state)=>{
            state.counter =0;
        }
    }

})

export default CounterSlice.reducer
export const {Increment,Decrement,INCREMENT_WITH_Value,Reset} = CounterSlice.actions