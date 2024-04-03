import React, {useState} from 'react';
import SignupForm from './SignupForm';


function LoginForm() {

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[showLogin, setLogin] = useState(true);

    const handleLogin = () => {
        if('' === username){
            alert('Please enter your username');
            return
        }

        if('' === password) {
            alert('Please enter your password')
            return
        }
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
                    onChange={e => setUsername(e.target.value)} /></p>
                </div>
                
                <div className='Password'>
                    <p>Password: <input placeholder='Enter your password' 
                    className='Password' 
                    type='password' 
                    onChange={e => setPassword(e.target.value)} /></p>
                </div>
                
                <div className='loginButton'>
                    <button type='summit' value={'Login'} onClick={handleLogin}>Login</button>
                </div>

                <div className='switchtoSignup'>             
                    <button type='button' onClick={handleSwitch}>Switch to Signup</button>
                </div>
            </form>
        ) :(<SignupForm />)}
        </div>
    );
}
export default LoginForm;