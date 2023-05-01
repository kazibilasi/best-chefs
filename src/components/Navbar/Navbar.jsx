import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    
                    <a className="btn  normal-case text-2xl">Best Chefs In India</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to = '/home' className='text-xl'>Home</Link></li>
                        <li><Link to = "/blogs" className='text-xl'>Blogs</Link ></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-xl">Log In</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;