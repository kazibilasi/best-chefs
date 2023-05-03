import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProviders/AuthProviders';

const Navbar = () => {

    const {user, logOut} = useContext (AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                <div className="dropdown">
                        <label tabIndex={0} className="btn btn-primary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='text-xl'>Home</Link></li>
                        <li><Link to="/blogs" className='text-xl'>Blogs</Link ></li>
                        </ul>
                    </div>

                    <a className="btn btn-primary normal-case text-2xl">Best Chefs In India</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/' className='text-xl'>Home</Link></li>
                        <li><Link to="/blogs" className='text-xl'>Blogs</Link ></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user? <>
                        <button onClick={handleLogOut}className='btn btn-primary'>Sign Out</button>
                        
                        </>: <Link to = "/login" className="btn btn-primary text-xl">Log In</Link >
                    }
                   
                    
                </div>
            </div>

        </div>
    );
};

export default Navbar;