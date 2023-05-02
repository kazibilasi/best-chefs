import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container mx-auto mt-12 w-1/5'>
            <div className="form-control border p-5 rounded-md ">
                <p className='text-center text-2xl font-medium'>Please Login</p>
                <div className="  place-self-center p-5">
                    <label className="label ">
                        <span className="label-text text-xl font-medium ">Your Email</span>
                    </label>
                    <label className="input-group">

                        <input type="email" placeholder="email" className="input input-bordered" />
                    </label>
                    <label className="label">
                        <span className="label-text text-xl font-medium">Your Password</span>
                    </label>
                    <label className="input-group ">

                        <input type="Password" placeholder="password" className="input input-bordered" />
                    </label>
                    <Link to = "/registration" className=' mt-10'>New in this page? Please Register.</Link>

                </div>
                

            </div>
        </div>
    );
};

export default Login;