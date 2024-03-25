import React from 'react';
import Navlink from 'react-router-dom';

function Header() {
    return (
        <div>
            <img src = {process.env.PUBLIC_URL + "images/logo.png"} 
                    weight="100px" height="100px" alt="logo" />

        <div className="navbar">
                <Navlink to="/">Home</Navlink>
                <Navlink to="/Productpage">Products</Navlink>
                <a href="/">Login</a>
            </div>
        </div>
    );
}

export default Header;