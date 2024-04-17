import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount } from '../Redux/CounterSlice'

const Counter = () => {
    const count = useSelector(function(state){
        return state.counter.value
    })

    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={()=>{dispatch(increment())}}>+1</button>
        <button onClick={()=>dispatch(incrementByAmount(20))}>20</button>
        <p style={{color:"red"}}>{count}</p>
        <button onClick={()=>{dispatch(decrement())}}>-1</button>
        <button onClick={()=>dispatch(decrementByAmount(20))}>20</button>
    </div>
  )
}

export default Counter