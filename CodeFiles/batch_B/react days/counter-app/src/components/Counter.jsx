import { useState } from "react"
import Button from "./Button"
export default () => {
    const [c, setC] = useState(0);

    
    function increment(){
        setC(c + 1);
    }
    // function decrement(){
    //     setC(c - 1);
    // }

    const decrement = () => setC(c - 1);
    return <div>
        <h1>
            {c}
        </h1>
        <Button fun = {increment} value="+"/>
        <Button fun = {decrement}  value="-"/>
    </div>
}