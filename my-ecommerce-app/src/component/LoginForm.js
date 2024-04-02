import React, {useState} from 'react';
import SignupForm from './SignupForm';


function LoginForm() {

    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[login, setLogin] = useState(true);

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
        setLogin(!login);

        if(login === true){
            <LoginForm/>
        }

        if(login === false){
            <SignupForm/>
        }
    }

    return(
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
                <input type='button' value={'Login'} onClick={handleLogin}/>
            </div>

            <div className='switchtoSignup'>
                <input type='button' 
                value={'Switch to Signup'} 
                onClick={handleSwitch}/>
            </div>
        </form>
    );
}
export default LoginForm;