import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../UserContext';

  export default function Login({ setToken }) { 
    const [email, setEmail] = useState(); 
    const [password, setPassword] = useState();
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    useEffect(() => {
      if (redirect) {
        navigate("/");
      }
    }, [redirect, navigate]);

    const handleSubmit = async e => { 
      e.preventDefault(); 
      try{
        const {data} = await axios.post('/login', {email, password});
        setUser(data);
        alert('login successfull');
        setRedirect(true);
      }catch{
        alert('login failed')
      }
   } 
 
   return( 
     <div className="login-wrapper"> 
       <h1>Please Log In</h1> 
       <form onSubmit={handleSubmit}> 
         <label>
            <p>Email</p> 
           <input type="email" name="email" autoComplete="off" placeholder="your email" onChange={e => setEmail(e.target.value)} />
          </label>
          <label> 
           <p>Password</p> 
           <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button> 
         </div>
        </form>
      </div>
    )
  }
/*   Login.propTypes = {
    setToken: PropTypes.func.isRequired 
 }; */