import React from 'react'
import SignIn from '../../SignIn/SignIn'
import SignUpForm from '../../SignUp/SignUpForm'
import './Authentication.scss'

function Authentication() {
  return (
    <div>
        <div className='authentication-container'>
        <SignIn/>
        <SignUpForm/>
    </div>
    </div>
  )
}

export default Authentication