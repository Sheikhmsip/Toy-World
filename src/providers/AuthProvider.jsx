import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const createUser = (email, password) => {
        setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = ( email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const googleProvider = new GoogleAuthProvider();

    const logInWithGoogle = () => {
        signInWithPopup(auth, googleProvider) 
        .then(result => {
            const loggedInUser = result.user;
            // console.log(loggedInUser)
            setUser(loggedInUser);
            
        })
        .catch(error => console.log(error.message))
    }

    const logout = (email, password) => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect( () => {
        const unsubscribe =   onAuthStateChanged( auth, loggedUser =>  {
          setUser(loggedUser)
           setLoading(false);
           });
           return () => {
               return unsubscribe();
           }
       }, [])

    const authInfo = {
       user,
       loading,
       createUser,
       login, 
       logInWithGoogle,
       logout

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;