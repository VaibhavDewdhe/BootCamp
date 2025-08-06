import { useState } from 'react'
import './normalform.css'

export default () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    function inputHandler(e) {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name + " : " + value);


        setFormData({ ...formData, [name]: value });
    }
    function submitHandler(e) {
        e.preventDefault();
        console.log(formData)


    }
    return <form id="normalform" onSubmit={submitHandler}>
        <div>
            <label htmlFor="name">Name</label>
            <input onChange={inputHandler} type="text" id="name" name="fullName" />
        </div>
        <div>
            <label htmlFor="email">email</label>
            <input onChange={inputHandler} type="email" id="email" name="email" />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input onChange={inputHandler} type="password" id="password" name="password" />
        </div>

        <button>Submit</button>
    </form>
}