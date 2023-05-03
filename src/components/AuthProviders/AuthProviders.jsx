import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../../firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);

    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('auth state change', currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const signInWithGoogle = () => {
        return signInWithPopup(auth,provider);
    }



    const authInfo = {
        user,
        
        createUser,
        signIn,
        logOut,
        signInWithGoogle

    }
    return (
       <AuthContext.Provider value ={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;