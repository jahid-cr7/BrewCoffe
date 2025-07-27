import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [users, setUser] = useState(null)

    const CreateUser = (email, password) =>{
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignInUser = (email, password) =>{
        setLoading(true); 
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = () =>{
        setLoading(true); 
        return signOut();
    }
    const googleSignIn = () =>{
        setLoading(true); 
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setLoading(false); 
        })
        return () => unsubscribe()
    }, [])
    const user = {
        CreateUser,
        SignInUser,
        Logout,
        googleSignIn,
        loading, setLoading,
        users, setUser
    }
    return (
        <AuthContext value={user}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;