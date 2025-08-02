import SiblingCount from "./SiblingCount";
import Button from './Button'
import { useState } from "react";

const SiblingCounterApp = () => {
    const [st, setSt] = useState(0);
    return <div>
        <SiblingCount val = {st}/>
        <Button fun={()=>setSt(st+1)} value="+"/>
        <Button fun={()=>setSt(st-1)} value="-"/>
    </div>
}

export default SiblingCounterApp;