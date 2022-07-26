import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {Increment,Decrement, INCREMENT_WITH_Value,Reset} from './Redux/CounterSlice'
import { useState } from 'react';

function App() {
  const [number,setNumber] = useState(null)
  let dispatch = useDispatch()
  const counter = useSelector(state=> state.Counter.counter)
  const Reset0 = ()=>{
    dispatch(Reset())
  }
  return (
    <div className="App">
      <h1>This is a workshop of redux -- toolkit </h1>
      <button onClick={()=> dispatch(Increment())}>+</button>
      <h3>{counter}</h3>
      <button onClick={()=>dispatch(Decrement())}>-</button>
      <input type='text' onChange={(e)=>setNumber(+e.target.value)} />
      <button onClick={()=>dispatch(INCREMENT_WITH_Value(number))}>INCREMENT WITH VALUE</button>
      <button onClick={Reset0}>RESET</button>
    </div>
  );
}

export default App;
