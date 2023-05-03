import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../../firebase.config';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { ImGoogle, ImGithub } from "react-icons/im";


const Login = () => {

    const { user, signIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .than(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
                form.reset();
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .than(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='container mx-auto mt-14 p-10 place-self-center justify-around lg:flex sm:flex-col-1'>
            <div className='mt-20'>
                <p className='text-2xl font-medium mb-3'>Please Login</p>

                <form onSubmit={handleLogin} >
                    <label htmlFor="">
                        <p className='text-xl font-medium mb-2'>Your Email</p>
                        <input className='border rounded p-2 w-full' type="email" name="email" placeholder='email' id="" required />
                    </label>
                    <label htmlFor="">
                        <p className='text-xl font-medium mb-2'>Your Password</p>
                        <input className='border rounded p-2 w-full' type="password" name="password" placeholder='password' id="" required />
                    </label><br />
                    <button className='btn btn-primary mt-3 w-full'>Submit</button>

                </form>

                <button onClick={handleGoogleSignIn} className='btn btn-outline mt-3 w-full'><span className='mr-3'><ImGoogle></ImGoogle></span>Log in with Google</button>
                <button className='btn btn-outline mt-3 w-full'> <span className='mr-3'><ImGithub></ImGithub></span> Log in with GitHub</button><br />

                <Link to="/registration" className='text-blue-500'>New in this page? Please Register</Link >
            </div>

            <div>
                <img className='rounded' src="https://img.freepik.com/free-vector/app-development-concept-with-flat-deisng_23-2147852844.jpg?size=626&ext=jpg&ga=GA1.1.1570833622.1680187286&semt=robertav1_2_sidr" alt="" />
            </div>




        </div>
    );
};

export default Login;