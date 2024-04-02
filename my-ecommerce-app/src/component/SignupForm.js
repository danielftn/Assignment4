import React, {useState} from 'react';
import LoginForm from './LoginForm';

function SignupForm(){
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[email, setEmail] = useState('')
    const[login, setLogin] = useState(true);

    const handleSignup = () => {
        if('' === username){
            alert('Please enter an username');
            return;
        }

        if('' === password) {
            alert('Please enter an password')
        }

        if(password !== confirmPassword){
            alert('Please make password the same ')
        }

        if('' === email){
            alert('Please enter an email')
        }
    }

    const handleSwitch = () => {
        setLogin(!login);
        
    }


    return(
    <form className='signupForm'>
        <h1>Signup</h1>
        <div className='Username'>
            <p>Username: 
            <input placeholder='Enter your username' 
            className='Username' 
            type='text' 
            onChange={e => setUsername(e.target.value)} /></p>
        </div>
        
        <div className='Password'>
            <p>Password: 
            <input placeholder='Enter your password' 
            className='Password' 
            type='password' 
            onChange={e => setPassword(e.target.value)}/></p>
        </div>

        <div className='confirmPassword'>
            <p>Confirm Password: 
            <input placeholder='Confirm your password' 
            className='confirmPassword' 
            type='password' 
            onChange={e => setConfirmPassword(e.target.value)}/></p>
        </div>

        <div className='email'>
            <p>Email: <input placeholder='Enter your email' 
            className='email' 
            type='text' 
            onChange={e => setEmail(e.target.value)}/></p>
        </div>
        
        <div className='signupButton'>
        <button type='summit' value={'Signu['} onClick={handleSignup}>Signup</button>
        </div>

        <div className='switchtoLogin'>
            {login ? null : <LoginForm />}
            <input type='button' value={'Switch to Login'} onClick={handleSwitch}/>
        </div>
    </form>
    );
}
export default SignupForm;