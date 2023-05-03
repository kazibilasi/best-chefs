import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../../firebase.config';


const Login = () => {

    const auth = getAuth(app);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .than(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='container mx-auto mt-12 w-1/5'>
            <p className='text-2xl font-medium mb-3'>Please Login</p>

            <form onSubmit={handleLogin} >
                <label htmlFor="">
                    <p className='text-xl font-medium mb-2'>Your Email</p>
                    <input className='border rounded p-2' type="email" name="email" placeholder='email' id="" required />
                </label>
                <label htmlFor="">
                    <p className='text-xl font-medium mb-2'>Your Password</p>
                    <input className='border rounded p-2' type="password" name="password" placeholder='password' id="" required />
                </label><br />
                <button className='btn btn-primary mt-3'>Submit</button>

            </form>

            <button className='btn btn-primary mt-3'>Sign in with Google</button>
            <button className='btn btn-primary mt-3'>Sign in with GitHub</button><br />

            <Link to="/registration" className='text-blue-500'>New in this page? Please Register</Link >



        </div>
    );
};

export default Login;