import './Counter.css'
import {useState} from 'react';

export const Counter = () => {
  const [n, kahipan] = useState(0);
  function increment(){
    kahipan(n+1)
  }

  return (
    <div>
        <h1>{n}</h1>
        <button onClick={()=>kahipan(n-1)}>-</button>
        <button onClick={increment}>+</button>
    </div>
  )
}
