import { useState } from "react";

export default () => {
    // const arr = useState(0);
    const [count, setCount] = useState(0);

    // arr[0];
    function increment() {
        // arr[1](arr[0] + 1)
        setCount(count + 1);
        console.log("incremented value: " + count);
    }
    function decrement() {
        // arr[1](arr[0] - 1)
        setCount(count - 1);
        console.log("decremented value: " + count);
    }


    return (

        <div>
            {/* <h1>{arr[0]}</h1> */}
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>

    )
}