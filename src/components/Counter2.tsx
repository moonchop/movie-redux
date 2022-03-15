import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { increase } from '../modules/counter';
type CounterProps={
    count:number;
    // onIncrease:()=>void;
    onDecrease:()=>void;
    onIncreaseBy:(diff:number)=>void;
}


export default function Counter2({
    count,
    onDecrease,
    onIncreaseBy
}:CounterProps) {

    const [a,setA] = useState(0);
    const dispatch = useDispatch();

    const onIncrease = ()=>{
        dispatch(increase());
    };
  return (
    <div>
         <h1>{count}</h1>
        <button onClick={() => setA(a + 1)}>+1@</button>
        <button onClick={onDecrease}>-1@</button>
        <button onClick={()=>onIncreaseBy(10)}>+10@</button>
    </div>
  )
}
