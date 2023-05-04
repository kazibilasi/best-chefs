import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { ImGoogle, ImGithub } from "react-icons/im";

const Registration = () => {

    const { user, createUser, updateLogin, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

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


    const handleGoogleRegister = () => {
        signInWithGoogle()
            .than(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleGithubRegister = () => {
        signInWithGithub()
            .than(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }




    return (
        <div>
            <div className='container mx-auto  mt-7 p-10 flex justify-around items-center'>
                <div className=' mt-2 w-2/5 '>
                    <p className='text-2xl font-medium mb-3 text-center'>Please Register</p>

                    <form onSubmit={handleRegister}  >
                        <label htmlFor="">
                            <p className='text-xl font-medium mb-2'>Your Name</p>
                            <input className='border rounded p-2 w-full' type="text" name="text" placeholder='text' id="" required />
                        </label>
                        <label htmlFor="">
                            <p className='text-xl font-medium mb-2'>Your Email</p>
                            <input className='border rounded p-2 w-full' type="email" name="email" placeholder='email' id="" />
                        </label>
                        <label htmlFor="">
                            <p className='text-xl font-medium mb-2'>Your Password</p>
                            <input className='border rounded p-2 w-full' type="password" name="password" placeholder='password' id="" required />
                        </label><br />
                        <label htmlFor="">
                            <p className='text-xl font-medium mb-2'>Photo URL</p>
                            <input className='border rounded p-2 w-full' type="text" name="image" placeholder='image' id="" />

                        </label><br />
                        <button className='btn btn-primary mt-3 w-full'>Submit</button>

                    </form>
                    <button onClick={handleGoogleRegister} className='btn btn-outline mt-3 w-full'><span className='mr-3'><ImGoogle></ImGoogle></span>Sign in with Google</button>
                    <button onClick={handleGithubRegister} className='btn btn-outline mt-3 w-full'> <span className='mr-3'><ImGithub></ImGithub></span> Sign in with GitHub</button><br />
                    <Link to="/login" className='text-blue-500'>Already have an account? Please Login.</Link >


                </div>
                <div>
                <img className='rounded' src="https://img.freepik.com/free-vector/app-development-concept-with-flat-deisng_23-2147852844.jpg?size=626&ext=jpg&ga=GA1.1.1570833622.1680187286&semt=robertav1_2_sidr" alt="" />
            </div>
            </div>


            
        </div>
    );
};

export default Registration;