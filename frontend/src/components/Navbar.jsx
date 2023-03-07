import React from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../UserContext";
import {useContext} from "react";
import axios from "axios";


function Navbar(){
    const {user} = useContext(UserContext);
    async function  logout(){
        await axios.post('/logout');
        window.location.reload();
        }
    return (<nav style={{display:'flex', background:"grey"}}>
        <h4 style={{marginRight:'10px'}}><Link to='/'>HOME</Link></h4>
        <h4 style={{marginRight:'10px'}}><Link to='/notes'>Notes</Link></h4>
        <h4 style={{marginRight:'10px'}}><Link to='/create'>Create Notes</Link></h4>
        <h4 style={{marginRight:'10px'}}><Link to='/login'>Login</Link></h4>
        <h4 style={{marginRight:'10px'}}><Link to='/register'>Register</Link></h4>
        {!!user && (
            <button onClick={logout} style={{marginRight:'10px'}}>logout</button>

        )}


    </nav>

    )}

export default Navbar;
