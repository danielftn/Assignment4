import React from 'react';

import Header from './Header'

const styles = {
    container: {
        padding: '10px 1vw'
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
        <div>
            <Header />

            <homeMainSection>

            </homeMainSection>

            <footer>
            </footer>
        </div>
    );
};

export default HomePage;
