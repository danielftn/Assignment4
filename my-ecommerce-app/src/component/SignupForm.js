import React, {useState} from 'react';
import LoginForm from './LoginForm';

function SignupForm(){
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const[email, setEmail] = useState('')
    const[showLogin, setLogin] = useState(false);

    const[message,setMessage] = useState('')
    const[signUp, setSignedUp] = useState(false);

    const handleSignup = (e) => {
        if('' === username || '' === password || '' === email){
            return;
        }

        else if(password !== confirmPassword){
            alert('Please make password the same ')
            return
        }
        
        else{
        e.preventDefault();
        fetch("http://localhost:5000/Signup",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({'username' : username, 'password' : password, 'email' : email})
        })
        .then(response => response.json())
        .then(response => {
            if(response.signUp){
                setMessage("Signup successful");
                setSignedUp(false)
            }
            else{
                setMessage("Signup failed. User alread exists")
            }

        })
        .catch(error => setMessage("Sign failed."))    
        }
    }

    const handleSwitch = () => {
        setLogin(!showLogin);
        
    }


    return(
    <div>
    {showLogin ? (<LoginForm/>):(
        <form className='signupForm'>
            <h1>Signup</h1>
            <div className='Username'>
                <p>Username: 
                <input placeholder='Enter your username' 
                className='Username' 
                type='text' 
                required
                onChange={e => setUsername(e.target.value)} /></p>
            </div>
            
            <div className='Password'>
                <p>Password: 
                <input placeholder='Enter your password' 
                className='Password' 
                type='password' 
                required
                onChange={e => setPassword(e.target.value)}/></p>
            </div>

            <div className='confirmPassword'>
                <p>Confirm Password: 
                <input placeholder='Confirm your password' 
                className='confirmPassword' 
                type='password' 
                required
                onChange={e => setConfirmPassword(e.target.value)}/></p>
            </div>

            <div className='email'>
                <p>Email: <input placeholder='Enter your email' 
                className='email' 
                type='text'
                required 
                onChange={e => setEmail(e.target.value)}/></p>
            </div>
            
            <div className='signupButton'>
            <button type='summit' value={'Signu['} onClick={handleSignup}>Signup</button>
            </div>

            <div className='switchtoLogin'>
                <input type='button' value={'Switch to Login'} onClick={handleSwitch}/>
            </div>
            {message && <p>{message}</p>}
        </form>
    )}
        </div>
    );
}
export default SignupForm;