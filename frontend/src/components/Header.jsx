import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";

    const Header = (props) => {
        return (
            <div>
                <Link path="/">
                    <h1>LOGO</h1>
                </Link>
                <Navbar />
            </div>
        )
        }

export default Header;