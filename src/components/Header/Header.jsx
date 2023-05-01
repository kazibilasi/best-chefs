import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;