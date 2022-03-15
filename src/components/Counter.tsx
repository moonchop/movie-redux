import { count } from 'console';
import React from 'react'
import { useDispatch } from 'react-redux';
import { increase } from '../modules/counter';

import styled from "styled-components";


type CounterProps={
    count:number;
    onDecrease:()=>void;
    onIncreaseBy:(diff:number)=>void;
}


export default function Counter({
    count,
    onDecrease,
    onIncreaseBy
}:CounterProps) {
  const dispatch = useDispatch();

  const onIncrease = ()=>{
      dispatch(increase());
  };
  return (
    <div>
        <h1>{count}</h1>
        <Btn onClick={onIncrease}>+1</Btn>
        <button onClick={onDecrease}>-1</button>
        <button onClick={()=>onIncreaseBy(5)}>+5</button>
    </div>
  )
}

const Btn = styled.button`

background:red;
`