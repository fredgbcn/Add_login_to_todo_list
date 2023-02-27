import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import {UserContext} from "../UserContext";
import {useContext} from "react";

    const Header = (props) => {
        const {user} = useContext(UserContext);
        return (
            <div>
            
                <Link path="/">
                    <h1>LOGO</h1>
                </Link>
                <Navbar />
                {!!user && (
          <div>
            {user.name}
          </div>
        )}
            </div>
        )
        }

export default Header;