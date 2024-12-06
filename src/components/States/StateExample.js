import React from 'react'

export const StateExample = () => {
    let value =10;
    const increment=()=>{
            value = value+1
            console.log(value);
            
    }
    const decrement =()=>{
        value = value-1
        console.log(value);
    }
  return (
    <>
    <div>StateExample</div>
    <div>value: {value}</div>
    <button onClick={increment}>+</button>
    <br></br>
    <button onClick={decrement}>-</button>
    </>
  )
}
