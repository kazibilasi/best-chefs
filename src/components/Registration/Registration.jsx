import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div className='container mx-auto mt-12 w-1/5 place-self-center'>
                <p className='text-2xl font-medium mb-3'>Please Register</p>

                <form  >
                    <label htmlFor="">
                        <p className='text-xl font-medium mb-2'>Your Email</p>
                        <input className='border rounded p-2' type="email" name="email" placeholder='email' id="" required />
                    </label>
                    <label htmlFor="">
                        <p className='text-xl font-medium mb-2'>Your Name</p>
                        <input className='border rounded p-2' type="text" name="name" placeholder='name' id="" required />
                    </label>
                    <label htmlFor="">
                        <p className='text-xl font-medium mb-2'>Your Password</p>
                        <input className='border rounded p-2' type="password" name="password" placeholder='password' id="" required />
                    </label><br />
                    <label htmlFor="">
                        <p className='text-xl font-medium mb-2'>Photo URL</p>
                        <input className='border rounded p-2' type="url" name="Photo url" placeholder='photo url' id="" required />
                    </label><br />
                    <button className='btn btn-primary mt-3'>Submit</button>

                </form>
                <button className='btn btn-primary mt-3'>Sign in with Google</button>
                <button className='btn btn-primary mt-3'>Sign in with GitHub</button><br />
                <Link to="/login" className='text-blue-500'>Already have an account? Please Login.</Link >


            </div>
        </div>
    );
};

export default Registration;