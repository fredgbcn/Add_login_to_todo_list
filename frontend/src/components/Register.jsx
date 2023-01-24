import React, { useState } from 'react';
import axios from "axios";
const Register = () =>{
           
        const [input,setInput] = useState({
            name: '',
            email: '',
            password: ''
        })

        function handleChange(event){
            const {name, value}= event.target;
            setInput(prevInput =>{
                return {
                    ...prevInput,
                    [name]: value
                }
            })
        }
        function handleClick(event){
            event.preventDefault();
            const newUser = {
                name: input.name,
                email: input.email,
                password: input.password
            }
            axios.post('http://localhost:3001/register', newUser);
        }
        return (<div>
            <h1>Create Note</h1>
            <form>
                <input onChange={handleChange} name="name" autoComplete="off" placeholder="name" value={input.name}></input>
                <input onChange={handleChange} name="email" autoComplete="off" placeholder="note email" value={input.email}></input>
                <input onChange={handleChange} name="password" autoComplete="off" type="password" placeholder="note password" value={input.password}></input>
                
                <button onClick={handleClick}>SUBMIT</button>
                
            </form>
        </div>
        
    )
}
export default Register;