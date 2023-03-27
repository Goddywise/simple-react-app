import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='container'>
      
        <form className='form'>
          <h1>Sigup Form</h1>
          <label>
              <span>First Name</span>
              <input type="First_Name" placeholder='Enter Your first name' />
          </label>
          <label>
              <span>Last Name</span>
              <input type="Last_Name" placeholder='Enter Your last name' />
          </label>
          <label>
              <span>Email</span>
              <input type="text" placeholder='Enter Email' />
          </label>
          <label>
              <span>Password</span>
              <input type="password" placeholder='Enter  your Password' />
          </label>
          <label>
              <span>Confirm Password</span>
              <input type="confirm_password" placeholder='Enter your Password' />
          </label>
          <button type="submit">Sin-up</button>
          <div>Already have an accout?, click <Link to='/' >here</Link> to login</div>
        </form>
      
          
    </div>
  )
}

export default SignUp
