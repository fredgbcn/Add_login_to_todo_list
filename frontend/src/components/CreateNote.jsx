import React, {useState} from "react";
import axios from "axios";
import './CreateNote.css';

    const CreateNote = () => {

        const [input,setInput] = useState({
            title: '',
            content: ''

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
            const newNote = {
                title: input.title,
                content: input.content
            }
            axios.post('http://localhost:3001/create', newNote);
        }
        return (<div>
            <h1>Create Note</h1>
            <form>
                <input onChange={handleChange} name="title" autoComplete="off" placeholder="note title" value={input.title}></input>
                <textarea onChange={handleChange} name="content" autoComplete="off" placeholder="note content" value={input.content}></textarea>
                <button onClick={handleClick}>SUBMIT</button>
                
            </form>
        </div>
        )
        }

export default CreateNote;