import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <header class="header" style={{display: 'flex', justifyContent: 'space-between'}}>  {/* inline style */}
                <div class="logo">
                    <img src={process.env.PUBLIC_URL + "images/logo.png"} height={"200px"} alt="Company Logo"></img>    {/* use process.env.PUBLIC_URL to access the public folder */}
                </div>
                <div class="company-name">  
                    <p>Company Name</p>
                </div>
            </header>
                <nav style={{ display: 'flex', justifyContent: 'space-between' }}>  {/* inline style */}
                <Link to ="./ProductPage" class="nav-link">Products</Link>  {/* use Link to navigate to the ProductPage component */}
                <Link to ="./" class="nav-link">Login</Link>    {/* use Link to navigate to the Homepage component */}
            </nav>
        </div>
    );
}

export default Header;