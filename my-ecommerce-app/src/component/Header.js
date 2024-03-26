import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <header class="header" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div class="logo">
                    <img src={process.env.PUBLIC_URL + "images/logo.png"} height={"200px"} alt="Company Logo"></img>
                </div>
                <div class="company-name">
                    <p>Company Name</p>
                </div>
            </header>
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to ="./" class="nav-link">Home</Link>
                <Link to ="./ProductPage" class="nav-link">Products</Link>
                <Link to ="./" class="nav-link">Login</Link>
            </nav>
        </div>
    );
}

export default Header;