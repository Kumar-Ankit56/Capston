// Initialize Firebase
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,doc,getDoc,setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCQPHGiLCPamTKjQbp56EkJcAVrODVJ1TA",
    authDomain: "capston-clothing.firebaseapp.com",
    projectId: "capston-clothing",
    storageBucket: "capston-clothing.appspot.com",
    messagingSenderId: "312372655688",
    appId: "1:312372655688:web:aca57cf58561f5cd6cca7d"
  };

const firbaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth(firbaseapp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db =getFirestore();
export const CreateUserfromAuth = async(userAuth)=>{
  const userRef = doc(db,'users',userAuth.uid);
  console.log(userRef);
  const userSnapshot = await getDoc(userRef);
  console.log(userSnapshot);
}