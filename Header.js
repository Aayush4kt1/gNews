import React from "react";
import "./Header.css"


function Header(props){

    return (
        <header className="header">
            <div className="title-logo">
                <img src="https://cdn.ndtv.com/common/images/ogndtv.png"
                alt= ""
                className="logo"/>
            </div>
            <div className="title">My Application </div>
            <nav className="navigation">

            <ul className="nav-links">
                <li>
                    <a href="">home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
            </ul>

            </nav>



        </header>
    )
}
export default Header;