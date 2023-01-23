import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return (<nav style={{display:'flex', background:"grey"}}>
        <h4 style={{marginRight:'10px'}}><Link to='/'>HOME</Link></h4>
        <h4 style={{marginRight:'10px'}}><Link to='/notes'>Notes</Link></h4>
        <h4 style={{marginRight:'10px'}}><Link to='/create'>Create Notes</Link></h4>
        <h4 style={{marginRight:'10px'}}><Link to='/login'>Login</Link></h4>
    </nav>

    )}

export default Navbar;
