import { useEffect, useState } from 'react';

export default () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("mounting phase");
    }, []);

    useEffect(() => console.log("updating phase"),[count])

    return <div>
        <h1>Life cycle component</h1>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
}