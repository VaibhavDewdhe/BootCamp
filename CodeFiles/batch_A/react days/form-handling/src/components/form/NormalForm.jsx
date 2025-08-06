import { useState } from 'react'
import './normalform.css'

export default () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    function nameInputHandler(e){
        setName(e.target.value);
    }

    function emailInputHandler(e){
        setEmail(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        console.log("Name: ", name)
        console.log("email: ", email);
        
    }
    return <form id="normalform" onSubmit={submitHandler}>
        <div>
            <label htmlFor="name">Name</label>
            <input value={name} onChange={nameInputHandler} type="text" id="name" name="name" />
        </div>
        <div>
            <label htmlFor="email">email</label>
            <input value={email} onChange={emailInputHandler} type="text" id="email" name="email" />
        </div>

        <button>Submit</button>
    </form>
}