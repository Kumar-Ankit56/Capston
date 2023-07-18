import React from 'react'
import {useState} from 'react'
import {createAuthUserWithEmailAndPassword,CreateUserfromAuth} from '../utils/FirebaseUtils/FirebaseUtils'
import FormInput from '../FormInput/FormInput';
import './SignUp.scss'
import Button from '../GeneralButton/Button';
const defaultformfieldValue={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

function SignUpForm() {
    const [formfield,setformfield]=useState(defaultformfieldValue);
  const{displayName,email,password,confirmPassword}=formfield;

    

  console.log(formfield);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setformfield({ ...formfield, [event.target.name]: event.target.value });
  };

  const resetFormFields = () => {
    setformfield(defaultformfieldValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await CreateUserfromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <>
      <div className='Sign-up-container'>
        <h2>Don't have an account</h2>
        <h2>Sign up with email and password</h2>
        <form onSubmit={handleSubmit}>
         <FormInput type="text" name="displayName" onChange={handleChange} value={displayName} required placeholder='Display Name' />
         <FormInput placeholder='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email} />
        

        <FormInput
          placeholder='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          placeholder='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type ='submit'>Sign Up</Button>
        </form>
      </div>
    </>
  )
}

export default SignUpForm