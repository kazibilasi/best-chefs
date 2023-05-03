import { createUserWithEmailAndPassword,updateProfile, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../../firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);

    }

    const updateLogin = ()=>{
       return updateProfile(auth.user, {
            displayName: "Jane Q. currentUser", photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
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
    const signInWithGithub = () => {
        return signInWithPopup (auth,gitProvider);
    }



    const authInfo = {
        user,
        
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        updateLogin,
        signInWithGithub

    }
    return (
       <AuthContext.Provider value ={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;