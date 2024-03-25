import React from 'react';

function Header() {
    return (
        <div>
            <img src = {process.env.PUBLIC_URL + "images/logo.png"} 
                    height="100px" alt="logo" />

        <div>                
            <a href="index.html">Homepage</a> 
            <a href="products.html">Products</a>
            <a href="contact.html">Contact</a>
            <a href="login.html">Login</a>
            </div>
        </div>
    )
}

export default Header;