import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { ImGoogle, ImGithub } from "react-icons/im";

const Registration = () => {

    const { user, createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email, password)
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
        <div>
            <div className='container mx-auto mt-12 w-1/5 place-self-center'>
                <p className='text-2xl font-medium mb-3'>Please Register</p>

                <form onSubmit={handleRegister}  >
                    <label htmlFor="">
                        <p className='text-xl font-medium mb-2'>Your Email</p>
                        <input className='border rounded p-2 w-full' type="email" name="email" placeholder='email' id="" required />
                    </label>
                    <label htmlFor="">
                        <p className='text-xl font-medium mb-2'>Your Name</p>
                        <input className='border rounded p-2 w-full' type="text" name="name" placeholder='name' id="" required />
                    </label>
                    <label htmlFor="">
                        <p className='text-xl font-medium mb-2'>Your Password</p>
                        <input className='border rounded p-2 w-full' type="password" name="password" placeholder='password' id="" required />
                    </label><br />
                    <label htmlFor="">
                        <p className='text-xl font-medium mb-2'>Photo URL</p>
                        <input className='border rounded p-2 w-full' type="" name="image" placeholder='image' id="" />

                    </label><br />
                    <button className='btn btn-primary mt-3 w-full'>Submit</button>

                </form>
                <button className='btn btn-outline mt-3 w-full'><span className='mr-3'><ImGoogle></ImGoogle></span>Sign in with Google</button>
                <button className='btn btn-outline mt-3 w-full'> <span className='mr-3'><ImGithub></ImGithub></span> Sign in with GitHub</button><br />
                <Link to="/login" className='text-blue-500'>Already have an account? Please Login.</Link >


            </div>
        </div>
    );
};

export default Registration;