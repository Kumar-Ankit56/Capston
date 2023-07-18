import React from 'react'
import {signInWithGooglePopup} from '../../utils/FirebaseUtils/FirebaseUtils'
import {CreateUserfromAuth} from '../../utils/FirebaseUtils/FirebaseUtils'

function SignInComponent() {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userRef = await CreateUserfromAuth(user);
  };
  return (
    <>
     <div>SignInComponent</div>
     <button onClick={logGoogleUser}>Click to sign in</button>
    </>
    
  )
}

export default SignInComponent