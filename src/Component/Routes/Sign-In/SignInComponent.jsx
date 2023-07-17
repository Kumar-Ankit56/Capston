import React from 'react'
import {signInWithGooglePopup} from '../../utils/FirebaseUtils/FirebaseUtils'

function SignInComponent() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <>
     <div>SignInComponent</div>
     <button onClick={logGoogleUser}>Click to sign in</button>
    </>
    
  )
}

export default SignInComponent