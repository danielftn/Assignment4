import React, {useState} from 'react';
import SignupForm from './SignupForm';


function LoginForm() {

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const [login, setLogin] = useState(true);

    const handleLogin = () => {
        if('' === username){
            alert('Please enter your username');
            return;
        }

        if('' === password) {
            alert('Please enter your password')
        }
    }

    const handleSwitch = () => {
        setLogin(!login);
    }

    return(
        <form className='loginForm'>
            <h1>Login</h1>
            <div className='Username'>
                <p>Login: <input placeholder='Enter your username' 
                className='inputBox' 
                type='text'
                onChange={e => setUsername(e.target.value)} /></p>
            </div>
            
            <div className='Password'>
                <p>Password: <input placeholder='Enter your password' 
                className='inputBox' 
                type='password' 
                onChange={e => setPassword(e.target.value)} /></p>
            </div>
            
            <div className='loginButton'>
                <input type='button' value={'Login'} onClick={handleLogin}/>
            </div>

            <div className='switchtoSignup'>
                <input type='button' value={'Switch to Signup'} onClick={handleSwitch}/>
            </div>
        </form>
    );
}
export default LoginForm;