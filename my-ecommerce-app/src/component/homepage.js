import React from 'react';
import { NavLink } from 'react-router-dom';


const styles = {
    container: {
        padding: '10px 1vw',
    },
    logo: {
        backgroundColor: '#333',
        margin: '0px',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
    },
    navigationbar: {
        display: 'flex',
        flexwrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
        backgroundolor: '#333',
    }
};

const HomePage = () => {
    return (
        <div style={styles.container}>
            <header>
                <div style={styles.logo}>
                <img src="images/logo.png" width="100px" height="100px" alt="logo" />
                <p style={{ fontSize: '25px' }}>E-commerce Website</p>
                </div>

                <div style={styles.navigationbar}>
                <a href="index.html">Homepage</a> 
                <a href="products.html">Products</a>
                <a href="contact.html">Contact</a>
                <a href="login.html">Login</a>
                </div>
            </header>

            <homeMainSection>

            </homeMainSection>

            <footer>
                <p>© Copyright, Ayodeji Fatokun and Jacelynn Doan</p>
            </footer>
        </div>
    );
};

export default HomePage;
