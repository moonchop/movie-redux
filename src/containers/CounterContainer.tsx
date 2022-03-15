import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules'
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';
import Counter2 from '../components/Counter2';



export default function CounterContainer() {

    const count = useSelector((state : RootState)=>state.counter.count)
    const dispatch = useDispatch();

    
    const onDecrease = () => {
        dispatch(decrease());
    };
    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    };
    return (
        <div>
            <Counter
                count={count}
               
                onDecrease={onDecrease}
                onIncreaseBy={onIncreaseBy}
            />
            <Counter2
                count={count}
                
                onDecrease={onDecrease}
                onIncreaseBy={onIncreaseBy}
            />
        </div>

);

}
