import React, { useContext } from 'react';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../context/AuthContext'; // Corrected path
import 'firebase/auth'; // Import any additional firebase services you need
import './Login.css';


const LoginSignup = () => {
  const { setUser } = useContext(AuthContext);

  const signInWithGoogle = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <div className='HeadingLogin'>
      <h1>Login or Signup for PU-MNRDC</h1>
      <button className= 'buttonContainer' onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default LoginSignup;
