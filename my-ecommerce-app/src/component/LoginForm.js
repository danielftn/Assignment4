import React, {useState, useEffect} from 'react';
import SignupForm from './SignupForm';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginForm({onLoginSuccess}) {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[showLogin, setLogin] = useState(true);
    const[message,setMessage] = useState('')
    const[loggedIn, setLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    

    const handleLogin = (e) => {
        if('' === username || '' === password){
            return
        }
        e.preventDefault();
        fetch("http://localhost:5000/LoginPage",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({'username' : username, 'password' : password})
        })
        .then(response => response.json())
        .then(response => {
            if(response.loggedIn && location.pathname === '/LoginPage'){
                setLoggedIn(true);
                setMessage("Authentication successful");
                navigate('/ProductPage')
            }
            else if(response.loggedIn){
                setLoggedIn(true);
                setMessage("Authentication successful");
                onLoginSuccess(true);
            }
            else{
                setLoggedIn(false)
                setMessage("Authentication failed. Incorrect username or password")
            }

        })
        .catch(error => setMessage("Error: Authentication failed."))    
    }

    const handleSwitch = () => {
        setLogin(!showLogin);
    }

    return(
        <div>
        {showLogin ? (
            <form className='loginForm'>
                <h1>Login</h1>
                <div className='Username'>
                    <p>Username: <input placeholder='Enter your username' 
                    className='Username' 
                    type='text'
                    required
                    onChange={e => setUsername(e.target.value)} /></p>
                </div>
                
                <div className='Password'>
                    <p>Password: <input placeholder='Enter your password' 
                    className='Password' 
                    type='password' 
                    required
                    onChange={e => setPassword(e.target.value)} /></p>
                </div>
                
                <div className='loginButton'>
                    <button type='summit' value={'Login'} onClick={handleLogin}>Login</button>
                </div>

                <div className='switchtoSignup'>             
                    <button type='button' onClick={handleSwitch}>Switch to Signup</button>
                </div>
                {message && <p>{message}</p>}
            </form>
        ) :(<SignupForm />)}
        </div>
    );
}
export default LoginForm;