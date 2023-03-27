import React, { useState } from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  // const [username,setUsername] = useState('hello');  
  const handleForm = (e) =>{
    e.preventDefault();
    //console.log(username);

  }
  return (
    <div className='container' onSubmit={handleForm}>
        
            <form className='form'>
              <h1>Login Form</h1>
              <label>
                  <span>Username</span>
                  <input type="text" placeholder='Enter Username' />
              </label>
              <label>
                  <span>Password</span>
                  <input type="password" placeholder='Enter Password' />
              </label>
              <button type="submit">
                  Login
              </button>
              <div>Do not have an accout, click <Link to='/sign-up' >here</Link> to create one</div>
          </form>
        
        
    </div>
  )
}

export default Login
