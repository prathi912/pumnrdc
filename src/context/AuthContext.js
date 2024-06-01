import React, { createContext, useState, useEffect } from 'react';
import { auth, googleProvider } from '../services/firebase'; // Corrected path

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
